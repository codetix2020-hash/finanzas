import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import Anthropic from "@anthropic-ai/sdk";

const inputSchema = z.object({
	historicalData: z.array(
		z.object({
			month: z.string(),
			mrr: z.number(),
			revenue: z.number(),
			costs: z.number(),
			profit: z.number(),
			churnRate: z.number().optional(),
			newCustomers: z.number().optional(),
		}),
	),
	currentMetrics: z.object({
		totalMRR: z.number(),
		totalRevenue: z.number(),
		totalCosts: z.number(),
		avgROI: z.number(),
		totalCustomers: z.number().optional(),
	}),
	predictionMonths: z.number().min(1).max(24).default(12),
});

const outputSchema = z.object({
	predictions: z.object({
		threeMonths: z.object({
			mrr: z.number(),
			revenue: z.number(),
			costs: z.number(),
			profit: z.number(),
			confidence: z.number(),
		}),
		sixMonths: z.object({
			mrr: z.number(),
			revenue: z.number(),
			costs: z.number(),
			profit: z.number(),
			confidence: z.number(),
		}),
		twelveMonths: z.object({
			mrr: z.number(),
			revenue: z.number(),
			costs: z.number(),
			profit: z.number(),
			confidence: z.number(),
		}),
	}),
	scenarios: z.object({
		bestCase: z.object({
			mrr12m: z.number(),
			revenue12m: z.number(),
			description: z.string(),
		}),
		realistic: z.object({
			mrr12m: z.number(),
			revenue12m: z.number(),
			description: z.string(),
		}),
		worstCase: z.object({
			mrr12m: z.number(),
			revenue12m: z.number(),
			description: z.string(),
		}),
	}),
	runway: z.object({
		months: z.number(),
		runOutDate: z.string(),
		warning: z.string().optional(),
	}),
	insights: z.array(z.string()),
	recommendations: z.array(z.string()),
});

export const predictMetrics = protectedProcedure
	.route({ method: "POST", path: "/predict-metrics" })
	.input(inputSchema)
	.output(outputSchema)
	.handler(async ({ input }) => {
		const { historicalData, currentMetrics, predictionMonths } = input;

		// Calcular tendencias básicas
		const calculateGrowthRate = (data: any[], key: string) => {
			if (data.length < 2) return 0;
			const recent = data.slice(-3);
			let totalGrowth = 0;
			for (let i = 1; i < recent.length; i++) {
				const growth =
					(recent[i][key] - recent[i - 1][key]) / recent[i - 1][key];
				totalGrowth += growth;
			}
			return (totalGrowth / (recent.length - 1)) * 100;
		};

		const mrrGrowthRate = calculateGrowthRate(historicalData, "mrr");
		const revenueGrowthRate = calculateGrowthRate(historicalData, "revenue");
		const costGrowthRate = calculateGrowthRate(historicalData, "costs");

		// Usar IA para predicciones avanzadas
		const anthropic = new Anthropic({
			apiKey: process.env.ANTHROPIC_API_KEY || "",
		});

		const prompt = `Eres un CFO experto en predicciones financieras de SaaS.

DATOS HISTÓRICOS (últimos ${historicalData.length} meses):
${historicalData
	.map(
		(d, i) =>
			`Mes ${i + 1}: MRR €${d.mrr}, Revenue €${d.revenue}, Costs €${d.costs}, Profit €${d.profit}`,
	)
	.join("\n")}

MÉTRICAS ACTUALES:
- MRR Total: €${currentMetrics.totalMRR}
- Revenue Total: €${currentMetrics.totalRevenue}
- Costs Total: €${currentMetrics.totalCosts}
- ROI Promedio: ${currentMetrics.avgROI}%

TENDENCIAS CALCULADAS:
- MRR Growth Rate: ${mrrGrowthRate.toFixed(2)}%/mes
- Revenue Growth Rate: ${revenueGrowthRate.toFixed(2)}%/mes
- Cost Growth Rate: ${costGrowthRate.toFixed(2)}%/mes

TAREA:
Predice las métricas para los próximos 3, 6 y 12 meses.
Genera 3 escenarios: Best Case, Realistic, Worst Case.
Calcula el runway (cuántos meses sobrevive el negocio con el burn rate actual).

RESPONDE EN FORMATO JSON:
{
  "predictions": {
    "threeMonths": {
      "mrr": número,
      "revenue": número,
      "costs": número,
      "profit": número,
      "confidence": número (0-100)
    },
    "sixMonths": { igual },
    "twelveMonths": { igual }
  },
  "scenarios": {
    "bestCase": {
      "mrr12m": número,
      "revenue12m": número,
      "description": "string explicando el escenario"
    },
    "realistic": { igual },
    "worstCase": { igual }
  },
  "runway": {
    "months": número,
    "runOutDate": "YYYY-MM-DD",
    "warning": "string opcional si runway < 12 meses"
  },
  "insights": ["insight1", "insight2", ...] (3-5 insights clave),
  "recommendations": ["rec1", "rec2", ...] (3-5 recomendaciones)
}

IMPORTANTE:
- Confidence baja (50-70%) para predicciones a 12 meses
- Confidence alta (80-95%) para 3 meses
- Best case: crecimiento acelerado (+30% vs realistic)
- Worst case: desaceleración significativa (-30% vs realistic)
- Runway basado en burn rate actual vs cash disponible`;

		try {
			const message = await anthropic.messages.create({
				model: "claude-sonnet-4-20250514",
				max_tokens: 2048,
				messages: [
					{
						role: "user",
						content: prompt,
					},
				],
			});

			const content = message.content[0];
			if (content.type !== "text") {
				throw new Error("Respuesta inesperada de Claude");
			}

			const responseText = content.text.trim();
			const jsonMatch = responseText.match(/\{[\s\S]*\}/);
			if (!jsonMatch) {
				throw new Error("No se encontró JSON en la respuesta");
			}

			const prediction = JSON.parse(jsonMatch[0]);
			return prediction;
		} catch (error) {
			console.error("Error al predecir métricas:", error);

			// Fallback a predicciones simples basadas en tendencias
			const predict = (base: number, growthRate: number, months: number) => {
				return Math.round(base * Math.pow(1 + growthRate / 100, months));
			};

			const predictedMRR3m = predict(
				currentMetrics.totalMRR,
				mrrGrowthRate,
				3,
			);
			const predictedMRR6m = predict(
				currentMetrics.totalMRR,
				mrrGrowthRate,
				6,
			);
			const predictedMRR12m = predict(
				currentMetrics.totalMRR,
				mrrGrowthRate,
				12,
			);

			const predictedRevenue3m = predict(
				currentMetrics.totalRevenue,
				revenueGrowthRate,
				3,
			);
			const predictedRevenue6m = predict(
				currentMetrics.totalRevenue,
				revenueGrowthRate,
				6,
			);
			const predictedRevenue12m = predict(
				currentMetrics.totalRevenue,
				revenueGrowthRate,
				12,
			);

			const predictedCosts3m = predict(
				currentMetrics.totalCosts,
				costGrowthRate,
				3,
			);
			const predictedCosts6m = predict(
				currentMetrics.totalCosts,
				costGrowthRate,
				6,
			);
			const predictedCosts12m = predict(
				currentMetrics.totalCosts,
				costGrowthRate,
				12,
			);

			const monthlyBurn = currentMetrics.totalCosts - currentMetrics.totalRevenue;
			const runway =
				monthlyBurn > 0
					? Math.floor((currentMetrics.totalRevenue * 3) / monthlyBurn)
					: 999;
			const runOutDate = new Date();
			runOutDate.setMonth(runOutDate.getMonth() + runway);

			return {
				predictions: {
					threeMonths: {
						mrr: predictedMRR3m,
						revenue: predictedRevenue3m,
						costs: predictedCosts3m,
						profit: predictedRevenue3m - predictedCosts3m,
						confidence: 85,
					},
					sixMonths: {
						mrr: predictedMRR6m,
						revenue: predictedRevenue6m,
						costs: predictedCosts6m,
						profit: predictedRevenue6m - predictedCosts6m,
						confidence: 70,
					},
					twelveMonths: {
						mrr: predictedMRR12m,
						revenue: predictedRevenue12m,
						costs: predictedCosts12m,
						profit: predictedRevenue12m - predictedCosts12m,
						confidence: 55,
					},
				},
				scenarios: {
					bestCase: {
						mrr12m: Math.round(predictedMRR12m * 1.3),
						revenue12m: Math.round(predictedRevenue12m * 1.3),
						description:
							"Crecimiento acelerado: viral growth, product-market fit perfecto",
					},
					realistic: {
						mrr12m: predictedMRR12m,
						revenue12m: predictedRevenue12m,
						description: "Crecimiento constante: mantener tendencia actual",
					},
					worstCase: {
						mrr12m: Math.round(predictedMRR12m * 0.7),
						revenue12m: Math.round(predictedRevenue12m * 0.7),
						description:
							"Desaceleración: incremento de churn, competencia agresiva",
					},
				},
				runway: {
					months: runway,
					runOutDate: runOutDate.toISOString().split("T")[0],
					warning:
						runway < 12 ? "⚠️ Runway crítico: menos de 12 meses" : undefined,
				},
				insights: [
					`MRR creciendo a ${mrrGrowthRate.toFixed(1)}%/mes`,
					`Proyección 12 meses: €${predictedMRR12m.toLocaleString()} MRR`,
					`Runway actual: ${runway} meses`,
					mrrGrowthRate > 10
						? "Crecimiento excelente"
						: "Crecimiento necesita aceleración",
				],
				recommendations: [
					mrrGrowthRate < 5
						? "Aumentar inversión en adquisición"
						: "Mantener estrategia de crecimiento",
					runway < 18
						? "Priorizar fundraising o profitabilidad"
						: "Runway saludable",
					costGrowthRate > revenueGrowthRate
						? "Optimizar estructura de costos"
						: "Costos bajo control",
				],
			};
		}
	});

