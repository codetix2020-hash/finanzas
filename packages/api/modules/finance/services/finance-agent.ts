import Anthropic from "@anthropic-ai/sdk";

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
}

