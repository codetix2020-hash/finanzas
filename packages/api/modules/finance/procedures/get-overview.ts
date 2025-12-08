import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { MetricsCalculator } from "../services/metrics-calculator";
import { db } from "@repo/database";

const metricsCalculator = new MetricsCalculator();

export const getOverview = protectedProcedure
	.route({ method: "GET", path: "/finance/overview" })
	.input(z.object({
		organizationId: z.string(),
	}))
	.output(z.object({
		mrr: z.number(),
		arr: z.number(),
		revenue30d: z.number(),
		revenue90d: z.number(),
		profit: z.number(),
		roi: z.number(),
		churnRate: z.number(),
		growthRate: z.number(),
		period: z.string(),
	}))
	.handler(async ({ input, context }) => {
		const { organizationId } = input;
		
		// Calcular métricas actuales
		const metrics = await metricsCalculator.saveMetrics(organizationId);
		
		// Obtener de DB
		const latestMetric = await db.financialMetric.findFirst({
			where: { organizationId },
			orderBy: { calculatedAt: "desc" },
		});
		
		if (!latestMetric) {
			return {
				mrr: 0,
				arr: 0,
				revenue30d: 0,
				revenue90d: 0,
				profit: 0,
				roi: 0,
				churnRate: 0,
				growthRate: 0,
				period: new Date().toISOString().slice(0, 7),
			};
		}
		
		const roi = latestMetric.revenue30d > 0 
			? ((latestMetric.profit / latestMetric.costs) * 100) 
			: 0;
		
		return {
			mrr: latestMetric.mrr,
			arr: latestMetric.arr,
			revenue30d: latestMetric.revenue30d,
			revenue90d: latestMetric.revenue90d,
			profit: latestMetric.profit,
			roi,
			churnRate: latestMetric.churnRate,
			growthRate: latestMetric.growthRate,
			period: latestMetric.period,
		};
	});
