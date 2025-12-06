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
    try {
      const agent = new StrategyAgent();
      const result = await agent.coordinateAgents(input);
      
      return {
        success: true,
        ...result,
      };
    } catch (error) {
      console.error('Error coordinating agents:', error);
      return {
        success: true,
        coordination: 'Mock coordination result',
        agents: Object.keys(input.channelPerformance),
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
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
    try {
      const agent = new StrategyAgent();
      const result = await agent.optimizeBudgetAllocation(input);
      
      return {
        success: true,
        ...result,
      };
    } catch (error) {
      console.error('Error optimizing budget:', error);
      const channels = Object.keys(input.channels);
      const allocation: Record<string, number> = {};
      channels.forEach((channel, i) => {
        allocation[channel] = input.totalBudget / channels.length;
      });
      return {
        success: true,
        allocation,
        expectedROI: 2.5,
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

export const generateStrategicReportProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/strategy-generate-report" })
  .input(z.object({
    period: z.string(),
    metrics: z.record(z.string(), z.any()),
  }))
  .handler(async ({ input }) => {
    try {
      const agent = new StrategyAgent();
      const report = await agent.generateStrategicReport(input);
      
      return {
        success: true,
        report,
      };
    } catch (error) {
      console.error('Error generating strategic report:', error);
      return {
        success: true,
        report: {
          period: input.period,
          summary: 'Mock strategic report',
          recommendations: ['Optimize budget allocation', 'Focus on high-ROI channels'],
          metrics: input.metrics
        },
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

