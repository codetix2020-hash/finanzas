import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '@repo/database'
import { saveMemory } from '../../../src/lib/ai/embeddings'

let anthropicClient: Anthropic | null = null

function getAnthropicClient() {
  if (!anthropicClient && process.env.ANTHROPIC_API_KEY) {
    anthropicClient = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }
  return anthropicClient
}

interface CompetitorAnalysisParams {
  organizationId: string
  productId: string
  competitors?: string[]
}

// Analizar competidores
export async function analyzeCompetitors(params: CompetitorAnalysisParams) {
  console.log('🔍 Analizando competidores...')

  const anthropic = getAnthropicClient()
  if (!anthropic) throw new Error('Anthropic not configured')

  // Obtener producto
  const product = await prisma.saasProduct.findUnique({
    where: { id: params.productId }
  })

  if (!product) throw new Error('Product not found')

  const prompt = `
Eres un experto en MARKETING DIGITAL y ANÁLISIS COMPETITIVO.
Tu objetivo es analizar la competencia y encontrar oportunidades de diferenciación.

NUESTRO PRODUCTO:
- Nombre: ${product.name}
- Descripción: ${product.description}
- Target: ${product.targetAudience}
- USP: ${product.usp}
- Pricing: ${JSON.stringify(product.pricing)}

${params.competitors?.length ? `COMPETIDORES CONOCIDOS: ${params.competitors.join(', ')}` : 'IDENTIFICA LOS 5 PRINCIPALES COMPETIDORES'}

Analiza el panorama competitivo y genera:

1. Perfil de cada competidor principal
2. Análisis de sus estrategias de marketing
3. Gaps y oportunidades para nosotros
4. Recomendaciones de posicionamiento

Responde SOLO con JSON:
{
  "competitors": [
    {
      "name": "nombre del competidor",
      "website": "url",
      "positioning": "cómo se posicionan",
      "targetAudience": "a quién van dirigidos",
      "pricingModel": "modelo de precios",
      "strengths": ["fortaleza 1", "fortaleza 2"],
      "weaknesses": ["debilidad 1", "debilidad 2"],
      "marketingChannels": ["canal 1", "canal 2"],
      "contentStrategy": "descripción de su estrategia de contenido",
      "messagingAngle": "su ángulo de mensajes principal"
    }
  ],
  "marketGaps": [
    {
      "gap": "descripción del gap",
      "opportunity": "cómo podemos aprovecharlo",
      "priority": "high | medium | low"
    }
  ],
  "positioningRecommendations": [
    {
      "recommendation": "recomendación específica",
      "reasoning": "por qué",
      "expectedImpact": "impacto esperado en conversiones o engagement"
    }
  ],
  "contentOpportunities": [
    {
      "topic": "tema que competidores no cubren bien",
      "format": "tipo de contenido recomendado",
      "platform": "dónde publicar"
    }
  ],
  "differentiators": [
    "diferenciador clave 1",
    "diferenciador clave 2",
    "diferenciador clave 3"
  ]
}
`

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }]
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : ''
  const analysis = JSON.parse(text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim())

  // Guardar análisis en memoria (importancia alta)
  await saveMemory(
    params.organizationId,
    'learning',
    `Competitive Analysis for ${product.name}: ${analysis.differentiators.join(', ')}. Key gaps: ${analysis.marketGaps.map((g: any) => g.gap).join(', ')}`,
    { type: 'competitor_analysis', productId: params.productId, competitors: analysis.competitors.map((c: any) => c.name) },
    8 // Alta importancia
  )

  // Guardar decisión
  await prisma.marketingDecision.create({
    data: {
      organizationId: params.organizationId,
      agentType: 'competitor_analyzer',
      decision: analysis,
      reasoning: `Competitive analysis for ${product.name}`,
      context: {
        productId: params.productId,
        competitorsAnalyzed: analysis.competitors.length
      },
      executedAt: new Date()
    }
  })

  console.log(`✅ Análisis completado: ${analysis.competitors.length} competidores analizados`)

  return analysis
}

// Monitorear cambios de competidores
export async function monitorCompetitorChanges(params: {
  organizationId: string
  productId: string
}) {
  console.log('👀 Monitoreando cambios de competidores...')

  // Obtener análisis previo
  const previousAnalysis = await prisma.marketingDecision.findFirst({
    where: {
      organizationId: params.organizationId,
      agentType: 'competitor_analyzer',
      context: { path: ['productId'], equals: params.productId }
    },
    orderBy: { createdAt: 'desc' }
  })

  if (!previousAnalysis) {
    console.log('⚠️ No hay análisis previo, ejecutando análisis inicial')
    return analyzeCompetitors(params)
  }

  // Ejecutar nuevo análisis
  const newAnalysis = await analyzeCompetitors(params)

  // Comparar y detectar cambios
  const previousCompetitors = (previousAnalysis.decision as any).competitors || []
  const newCompetitors = newAnalysis.competitors || []

  const changes = {
    newCompetitors: newCompetitors.filter(
      (nc: any) => !previousCompetitors.find((pc: any) => pc.name === nc.name)
    ),
    removedCompetitors: previousCompetitors.filter(
      (pc: any) => !newCompetitors.find((nc: any) => nc.name === pc.name)
    ),
    newGaps: newAnalysis.marketGaps?.filter(
      (ng: any) => !(previousAnalysis.decision as any).marketGaps?.find((pg: any) => pg.gap === ng.gap)
    ) || []
  }

  console.log(`✅ Monitoreo completado: ${changes.newGaps.length} nuevas oportunidades detectadas`)

  return {
    currentAnalysis: newAnalysis,
    changes,
    lastAnalysisDate: previousAnalysis.createdAt
  }
}

export default {
  analyzeCompetitors,
  monitorCompetitorChanges
}

