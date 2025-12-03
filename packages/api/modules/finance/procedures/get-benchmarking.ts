import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { BenchmarkingService } from "../services/benchmarking";

const inputSchema = z.object({
	revenueGrowthRate: z.number(),
	nrr: z.number(),
	grossMargin: z.number(),
	ltvToCac: z.number(),
	cacPayback: z.number(),
	churnRate: z.number(),
	ruleOf40: z.number(),
	magicNumber: z.number(),
});

export const getBenchmarking = protectedProcedure
	.route({ method: "POST", path: "/get-benchmarking" })
	.input(inputSchema)
	.output(z.any())
	.handler(async ({ input }) => {
		const report = BenchmarkingService.generateReport(input);

		return report;
	});

