import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { FinanceAgent } from "../services/finance-agent";

const financeAgent = new FinanceAgent();

export const detectAnomalies = protectedProcedure
	.route({ method: "POST", path: "/finance/detect-anomalies" })
	.input(z.object({
		organizationId: z.string(),
	}))
	.output(z.object({
		anomalies: z.array(z.object({
			id: z.string(),
			type: z.string(),
			severity: z.string(),
			metric: z.string(),
			deviation: z.number(),
			cause: z.string().nullable(),
			recommendation: z.string().nullable(),
			detectedAt: z.date(),
		})),
	}))
	.handler(async ({ input }) => {
		const { organizationId } = input;
		
		const anomalies = await financeAgent.detectAnomalies(organizationId);
		
		return { anomalies };
	});

