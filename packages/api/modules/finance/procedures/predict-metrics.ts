import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { FinanceAgent } from "../services/finance-agent";

const financeAgent = new FinanceAgent();

export const predictMetrics = protectedProcedure
	.route({ method: "POST", path: "/finance/predict" })
	.input(z.object({
		organizationId: z.string(),
		monthsAhead: z.number().optional().default(6),
	}))
	.output(z.object({
		predictions: z.array(z.object({
			period: z.string(),
			expected: z.number(),
			best: z.number().optional(),
			worst: z.number().optional(),
			confidence: z.number(),
		})),
	}))
	.handler(async ({ input }) => {
		const { organizationId, monthsAhead } = input;
		
		const result = await financeAgent.predictMRR(organizationId, monthsAhead);
		
		return {
			predictions: result.predictions || [],
		};
	});
