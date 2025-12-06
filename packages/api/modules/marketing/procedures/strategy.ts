import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { StrategyAgent } from "../services/strategy-agent";

export const coordinateMarketingAgentsProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/strategy-coordinate-agents" })
  .input(z.object({
    channelPerformance: z.record(z.string(), z.object({
      spend: z.number(),
      revenue: z.number(),
      roi: z.number(),
    })),
    totalBudget: z.number(),
    goals: z.array(z.string()),
  }))
  .handler(async ({ input }) => {
    const agent = new StrategyAgent();
    const result = await agent.coordinateAgents(input);
    
    return {
      success: true,
      ...result,
    };
  });

export const optimizeBudgetProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/strategy-optimize-budget" })
  .input(z.object({
    totalBudget: z.number(),
    channels: z.record(z.string(), z.object({
      currentSpend: z.number(),
      roi: z.number(),
    })),
    constraints: z.object({
      minSpendPerChannel: z.number().optional(),
      maxSpendPerChannel: z.number().optional(),
    }).optional(),
  }))
  .handler(async ({ input }) => {
    const agent = new StrategyAgent();
    const result = await agent.optimizeBudgetAllocation(input);
    
    return {
      success: true,
      ...result,
    };
  });

export const generateStrategicReportProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/strategy-generate-report" })
  .input(z.object({
    period: z.string(),
    metrics: z.record(z.string(), z.any()),
  }))
  .handler(async ({ input }) => {
    const agent = new StrategyAgent();
    const report = await agent.generateStrategicReport(input);
    
    return {
      success: true,
      report,
    };
  });

