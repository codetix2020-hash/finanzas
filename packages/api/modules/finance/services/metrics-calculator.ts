import { db } from "@repo/database";
import { startOfMonth, subMonths, format } from "date-fns";

export class MetricsCalculator {
  async calculateMRR(organizationId: string): Promise<number> {
    // Obtener transacciones recurrentes del último mes
    const startDate = startOfMonth(new Date());
    
    const subscriptions = await db.transaction.findMany({
      where: {
        organizationId,
        type: "income",
        category: "subscription",
        date: { gte: startDate },
      },
    });
    
    const mrr = subscriptions.reduce((sum, t) => sum + t.amount, 0);
    return mrr;
  }

  async calculateRevenue(organizationId: string, days: number): Promise<number> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const transactions = await db.transaction.findMany({
      where: {
        organizationId,
        type: "income",
        date: { gte: startDate },
      },
    });
    
    return transactions.reduce((sum, t) => sum + t.amount, 0);
  }

  async calculateProfit(organizationId: string, days: number): Promise<number> {
    const revenue = await this.calculateRevenue(organizationId, days);
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const costs = await db.transaction.findMany({
      where: {
        organizationId,
        type: "expense",
        date: { gte: startDate },
      },
    });
    
    const totalCosts = costs.reduce((sum, t) => sum + t.amount, 0);
    return revenue - totalCosts;
  }

  async calculateChurnRate(organizationId: string): Promise<number> {
    // Simplificado: contar cancelaciones vs clientes activos
    const thisMonth = startOfMonth(new Date());
    const lastMonth = subMonths(thisMonth, 1);
    
    const churned = await db.transaction.count({
      where: {
        organizationId,
        category: "cancellation",
        date: { gte: lastMonth, lt: thisMonth },
      },
    });
    
    const activeSubscriptions = await db.transaction.groupBy({
      by: ["customerId"],
      where: {
        organizationId,
        type: "income",
        category: "subscription",
        date: { gte: lastMonth },
      },
    });
    
    const totalCustomers = activeSubscriptions.length;
    return totalCustomers > 0 ? (churned / totalCustomers) * 100 : 0;
  }

  async saveMetrics(organizationId: string) {
    const period = format(new Date(), "yyyy-MM");
    
    const mrr = await this.calculateMRR(organizationId);
    const revenue30d = await this.calculateRevenue(organizationId, 30);
    const revenue90d = await this.calculateRevenue(organizationId, 90);
    const profit = await this.calculateProfit(organizationId, 30);
    const churnRate = await this.calculateChurnRate(organizationId);
    
    // Calcular growth rate comparando con mes anterior
    const previousPeriod = format(subMonths(new Date(), 1), "yyyy-MM");
    const previousMetric = await db.financialMetric.findUnique({
      where: {
        organizationId_period: {
          organizationId,
          period: previousPeriod,
        },
      },
    });
    
    const growthRate = previousMetric && previousMetric.mrr > 0
      ? ((mrr - previousMetric.mrr) / previousMetric.mrr) * 100
      : 0;
    
    await db.financialMetric.upsert({
      where: {
        organizationId_period: {
          organizationId,
          period,
        },
      },
      create: {
        organizationId,
        period,
        mrr,
        arr: mrr * 12,
        revenue30d,
        revenue90d,
        profit,
        costs: revenue30d - profit,
        churnRate,
        growthRate,
      },
      update: {
        mrr,
        arr: mrr * 12,
        revenue30d,
        revenue90d,
        profit,
        costs: revenue30d - profit,
        churnRate,
        growthRate,
      },
    });
    
    return { mrr, revenue30d, profit, churnRate, growthRate };
  }
}

