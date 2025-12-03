import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { AnomalyDetector } from "../services/anomaly-detector";

const inputSchema = z.object({
	currentMetrics: z.object({
		totalMRR: z.number(),
		totalRevenue: z.number(),
		totalCosts: z.number(),
		netProfit: z.number(),
		avgROI: z.number(),
		churnRate: z.number().optional(),
		cac: z.number().optional(),
		ltv: z.number().optional(),
	}),
	historicalData: z.array(
		z.object({
			date: z.string(),
			mrr: z.number(),
			revenue: z.number(),
			costs: z.number(),
			profit: z.number(),
		}),
	),
	recentEvents: z.array(z.string()).optional(),
});

const outputSchema = z.object({
	anomalies: z.array(z.any()),
	analysis: z.object({
		summary: z.string(),
		overallAssessment: z.string(),
		urgentActions: z.array(z.string()),
	}),
	detectedAt: z.date(),
});

export const detectAnomalies = protectedProcedure
	.route({ method: "POST", path: "/detect-anomalies" })
	.input(inputSchema)
	.output(outputSchema)
	.handler(async ({ input }) => {
		const { currentMetrics, historicalData, recentEvents } = input;
		const anomalies: any[] = [];

		// Detectar anomalías estadísticas en cada métrica
		const metrics = [
			{
				name: "MRR",
				current: currentMetrics.totalMRR,
				historical: historicalData.map((d) => ({
					value: d.mrr,
					timestamp: new Date(d.date),
				})),
			},
			{
				name: "Revenue",
				current: currentMetrics.totalRevenue,
				historical: historicalData.map((d) => ({
					value: d.revenue,
					timestamp: new Date(d.date),
				})),
			},
			{
				name: "Costs",
				current: currentMetrics.totalCosts,
				historical: historicalData.map((d) => ({
					value: d.costs,
					timestamp: new Date(d.date),
				})),
			},
			{
				name: "Profit",
				current: currentMetrics.netProfit,
				historical: historicalData.map((d) => ({
					value: d.profit,
					timestamp: new Date(d.date),
				})),
			},
		];

		for (const metric of metrics) {
			const anomaly = AnomalyDetector.detectStatisticalAnomalies(
				metric.historical,
				metric.current,
				metric.name,
				2, // 2 desviaciones estándar
			);

			if (anomaly) {
				anomalies.push(anomaly);
			}
		}

		// Detectar cambios de tendencia
		const trendBreak = AnomalyDetector.detectTrendBreak(
			historicalData.map((d) => ({
				value: d.mrr,
				timestamp: new Date(d.date),
			})),
		);

		if (trendBreak) {
			anomalies.push(trendBreak);
		}

		// Detectar threshold breaches
		const thresholdAnomalies = AnomalyDetector.detectThresholdBreaches({
			churnRate: currentMetrics.churnRate,
			cac: currentMetrics.cac,
			ltv: currentMetrics.ltv,
		});

		anomalies.push(...thresholdAnomalies);

		// Análisis con IA
		const analysis = await AnomalyDetector.analyzeWithAI(anomalies, {
			currentMetrics,
			historicalData,
			recentEvents,
		});

		return {
			anomalies: analysis.prioritizedAnomalies,
			analysis: {
				summary: analysis.summary,
				overallAssessment: analysis.overallAssessment,
				urgentActions: analysis.urgentActions,
			},
			detectedAt: new Date(),
		};
	});

