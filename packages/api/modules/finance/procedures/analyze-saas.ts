import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { FinanceAgent } from "../services/finance-agent";

const inputSchema = z.object({
  saasName: z.string(),
  mrr: z.number(),
  arr: z.number(),
  customers: z.number(),
  churnRate: z.number(),
  growthRate: z.number(),
  burnRate: z.number().optional(),
  runway: z.number().optional(),
  ltv: z.number().optional(),
  cac: z.number().optional(),
});

export const analyzeSaas = protectedProcedure
  .route({ method: "POST", path: "/analyze-saas" })
  .input(inputSchema)
  .output(z.any())
  .handler(async ({ input }) => {
    const agent = new FinanceAgent();
    const analysis = await agent.analyzeSaas(input);
    
    return {
      success: true,
      analysis,
      generatedAt: new Date().toISOString(),
    };
  });

