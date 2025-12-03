import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { CohortAnalyzer } from "../services/cohort-analyzer";

const inputSchema = z.object({
	saasId: z.string().optional(),
});

const outputSchema = z.object({
	cohorts: z.array(z.any()),
	goldenCohort: z.any(),
	heatmapData: z.array(z.any()),
	aggregateMetrics: z.any(),
	generatedAt: z.date(),
});

export const getCohortAnalysis = protectedProcedure
	.route({ method: "POST", path: "/get-cohort-analysis" })
	.input(inputSchema)
	.output(outputSchema)
	.handler(async ({ input }) => {
		// Por ahora usamos datos mock
		// TODO: Integrar con base de datos real cuando tengamos usuarios reales

		const cohorts = CohortAnalyzer.generateMockCohorts();
		const goldenCohort = CohortAnalyzer.identifyGoldenCohort(cohorts);
		const heatmapData = CohortAnalyzer.generateRetentionHeatmap(cohorts);
		const aggregateMetrics =
			CohortAnalyzer.calculateAggregateMetrics(cohorts);

		return {
			cohorts,
			goldenCohort,
			heatmapData,
			aggregateMetrics,
			generatedAt: new Date(),
		};
	});

