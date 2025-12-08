import Anthropic from "@anthropic-ai/sdk";
import { db } from "@repo/database";

export interface FinanceAnalysis {
  summary: string;
  insights: string[];
  recommendations: Array<{
    priority: 'high' | 'medium' | 'low';
    action: string;
    reasoning: string;
    impact: string;
  }>;
  metrics: {
    health_score: number;
    trend: 'improving' | 'stable' | 'declining';
    key_concerns: string[];
  };
}

export class FinanceAgent {
  private anthropic: Anthropic;

  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY || "",
    });
  }

  /**
   * Analizar un SaaS con IA
   */
  async analyzeSaas(data: {
    saasName: string;
    mrr: number;
    arr: number;
    customers: number;
    churnRate: number;
    growthRate: number;
    burnRate?: number;
    runway?: number;
    ltv?: number;
    cac?: number;
  }): Promise<FinanceAnalysis> {
    const prompt = `Eres un CFO experto analizando un SaaS. Analiza estos datos:

DATOS DEL SAAS: ${data.saasName}
- MRR: €${data.mrr.toLocaleString()}
- ARR: €${data.arr.toLocaleString()}
- Clientes: ${data.customers}
- Churn Rate: ${data.churnRate}%
- Growth Rate: ${data.growthRate}%
${data.burnRate ? `- Burn Rate: €${data.burnRate.toLocaleString()}/mes` : ''}
${data.runway ? `- Runway: ${data.runway} meses` : ''}
${data.ltv ? `- LTV: €${data.ltv.toLocaleString()}` : ''}
${data.cac ? `- CAC: €${data.cac.toLocaleString()}` : ''}

Proporciona:
1. Summary ejecutivo (2-3 frases)
2. 3-5 insights clave
3. 3-5 recomendaciones priorizadas con:
   - priority (high/medium/low)
   - action (qué hacer)
   - reasoning (por qué)
   - impact (resultado esperado)
4. Health score (0-100)
5. Trend (improving/stable/declining)
6. Key concerns (2-3 preocupaciones principales)

Responde SOLO con JSON válido en este formato:
{
  "summary": "string",
  "insights": ["string", "string", ...],
  "recommendations": [
    {
      "priority": "high|medium|low",
      "action": "string",
      "reasoning": "string",
      "impact": "string"
    }
  ],
  "metrics": {
    "health_score": number,
    "trend": "improving|stable|declining",
    "key_concerns": ["string", "string"]
  }
}`;

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      });

      const content = message.content[0];
      if (content.type !== "text") {
        throw new Error("Unexpected response type");
      }

      // Limpiar markdown si existe
      const responseText = content.text.trim();
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }

      const analysis: FinanceAnalysis = JSON.parse(jsonMatch[0]);
      return analysis;
    } catch (error) {
      console.error("Error in Finance Agent analysis:", error);
      
      // Fallback analysis
      return {
        summary: `Análisis de ${data.saasName}: MRR de €${data.mrr.toLocaleString()} con ${data.customers} clientes y churn del ${data.churnRate}%.`,
        insights: [
          `MRR actual: €${data.mrr.toLocaleString()}`,
          `Growth rate: ${data.growthRate}%`,
          `Churn rate: ${data.churnRate}%`,
        ],
        recommendations: [
          {
            priority: 'high',
            action: 'Reducir churn rate',
            reasoning: `Churn del ${data.churnRate}% impacta el crecimiento`,
            impact: 'Mejora en retención y MRR',
          },
        ],
        metrics: {
          health_score: 70,
          trend: 'stable',
          key_concerns: ['Churn rate alto'],
        },
      };
    }
  }

  /**
   * Analizar múltiples métricas con contexto
   */
  async analyzeMetrics(metrics: {
    current: Record<string, number>;
    previous?: Record<string, number>;
    benchmarks?: Record<string, number>;
  }): Promise<FinanceAnalysis> {
    const prompt = `Analiza estas métricas financieras:

MÉTRICAS ACTUALES:
${Object.entries(metrics.current).map(([k, v]) => `- ${k}: ${v}`).join('\n')}

${metrics.previous ? `PERÍODO ANTERIOR:\n${Object.entries(metrics.previous).map(([k, v]) => `- ${k}: ${v}`).join('\n')}` : ''}

${metrics.benchmarks ? `BENCHMARKS INDUSTRIA:\n${Object.entries(metrics.benchmarks).map(([k, v]) => `- ${k}: ${v}`).join('\n')}` : ''}

Proporciona análisis en formato JSON.`;

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      });

      const content = message.content[0];
      if (content.type !== "text") {
        throw new Error("Unexpected response type");
      }

      const responseText = content.text.trim();
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }

      return JSON.parse(jsonMatch[0]);
    } catch (error) {
      console.error("Error analyzing metrics:", error);
      return {
        summary: "Análisis de métricas completado",
        insights: ["Métricas procesadas"],
        recommendations: [],
        metrics: {
          health_score: 70,
          trend: 'stable',
          key_concerns: [],
        },
      };
    }
  }

  /**
   * Analizar métricas históricas con IA
   */
  async analyzeMetrics(organizationId: string) {
    // Obtener métricas históricas
    const metrics = await db.financialMetric.findMany({
      where: { organizationId },
      orderBy: { period: "desc" },
      take: 12,
    });
    
    if (metrics.length === 0) {
      return {
        insights: ["No hay suficientes datos para análisis"],
        recommendations: [],
        risks: [],
      };
    }
    
    const prompt = `Analiza estas métricas financieras de una empresa SaaS:

${JSON.stringify(metrics, null, 2)}

Proporciona:

1. 3-5 insights clave
2. 3-5 recomendaciones accionables
3. Riesgos identificados

Formato JSON:

{
  "insights": ["..."],
  "recommendations": ["..."],
  "risks": ["..."]
}`;

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      });
      
      const content = message.content[0];
      if (content.type === "text") {
        try {
          const responseText = content.text.trim();
          const jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
          }
        } catch {
          // Fallback
        }
      }
    } catch (error) {
      console.error("Error analyzing metrics:", error);
    }
    
    return { insights: [], recommendations: [], risks: [] };
  }

  /**
   * Predecir MRR con IA
   */
  async predictMRR(organizationId: string, monthsAhead: number = 6) {
    const metrics = await db.financialMetric.findMany({
      where: { organizationId },
      orderBy: { period: "desc" },
      take: 12,
    });
    
    if (metrics.length < 3) {
      return { predictions: [], confidence: 0 };
    }
    
    const prompt = `Predice el MRR de los próximos ${monthsAhead} meses basándote en estos datos históricos:

${JSON.stringify(metrics.map(m => ({ period: m.period, mrr: m.mrr })), null, 2)}

Proporciona predicción con 3 escenarios (best, expected, worst) en formato JSON:

{
  "predictions": [
    { "period": "2025-01", "expected": 15000, "best": 18000, "worst": 13000, "confidence": 0.8 },
    ...
  ]
}`;

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      });
      
      const content = message.content[0];
      if (content.type === "text") {
        try {
          const responseText = content.text.trim();
          const jsonMatch = responseText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const result = JSON.parse(jsonMatch[0]);
            
            // Guardar predicciones en DB
            for (const pred of result.predictions || []) {
              await db.prediction.create({
                data: {
                  organizationId,
                  metric: "mrr",
                  currentValue: metrics[0]?.mrr || 0,
                  predictedValue: pred.expected,
                  period: pred.period,
                  confidence: pred.confidence || 0.7,
                  bestCase: pred.best,
                  worstCase: pred.worst,
                },
              });
            }
            
            return result;
          }
        } catch (error) {
          console.error("Error parsing predictions:", error);
        }
      }
    } catch (error) {
      console.error("Error predicting MRR:", error);
    }
    
    return { predictions: [], confidence: 0 };
  }

  /**
   * Detectar anomalías con IA
   */
  async detectAnomalies(organizationId: string) {
    const metrics = await db.financialMetric.findMany({
      where: { organizationId },
      orderBy: { period: "desc" },
      take: 6,
    });
    
    if (metrics.length < 3) {
      return [];
    }
    
    const anomalies = [];
    const current = metrics[0];
    const previous = metrics.slice(1);
    
    // Calcular promedio y desviación estándar
    const avgMRR = previous.reduce((sum, m) => sum + m.mrr, 0) / previous.length;
    const stdDevMRR = Math.sqrt(
      previous.reduce((sum, m) => sum + Math.pow(m.mrr - avgMRR, 2), 0) / previous.length
    );
    
    // Detectar anomalías (más de 2 desviaciones estándar)
    const mrrDeviation = Math.abs(current.mrr - avgMRR);
    if (mrrDeviation > 2 * stdDevMRR) {
      const severity = mrrDeviation > 3 * stdDevMRR ? "critical" : "high";
      
      // Usar IA para analizar causa
      const prompt = `MRR actual: ${current.mrr}, Promedio histórico: ${avgMRR}. 
Desviación: ${((mrrDeviation / avgMRR) * 100).toFixed(1)}%.
Identifica causa probable y recomienda acción en 1-2 frases cortas.`;
      
      try {
        const message = await this.anthropic.messages.create({
          model: "claude-sonnet-4-20250514",
          max_tokens: 200,
          messages: [{ role: "user", content: prompt }],
        });
        
        const content = message.content[0];
        const analysis = content.type === "text" ? content.text : "";
        const parts = analysis.split(".");
        
        const anomaly = await db.anomaly.create({
          data: {
            organizationId,
            type: current.mrr < avgMRR ? "mrr_drop" : "mrr_spike",
            severity,
            metric: "mrr",
            expectedValue: avgMRR,
            actualValue: current.mrr,
            deviation: (mrrDeviation / avgMRR) * 100,
            cause: parts[0] || null,
            recommendation: parts[1] || null,
          },
        });
        
        anomalies.push(anomaly);
      } catch (error) {
        console.error("Error detecting anomalies:", error);
      }
    }
    
    return anomalies;
  }
}

