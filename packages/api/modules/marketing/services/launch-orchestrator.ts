import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '@repo/database'

let anthropicClient: Anthropic | null = null

function getAnthropicClient() {
  if (!anthropicClient && process.env.ANTHROPIC_API_KEY) {
    anthropicClient = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }
  return anthropicClient
}

interface LaunchParams {
  organizationId: string
  productId: string
  launchDate: Date
  launchType: 'soft' | 'full' | 'beta'
}

// Orquestar lanzamiento de producto
export async function orchestrateLaunch(params: LaunchParams) {
  console.log('🚀 Orquestando lanzamiento de producto...')

  const anthropic = getAnthropicClient()
  if (!anthropic) throw new Error('Anthropic not configured')

  const product = await prisma.saasProduct.findUnique({
    where: { id: params.productId }
  })

  if (!product) throw new Error('Product not found')

  const launchDate = new Date(params.launchDate)
  const daysUntilLaunch = Math.ceil((launchDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))

  const prompt = `
Eres un experto en MARKETING DIGITAL y LANZAMIENTO DE PRODUCTOS.
Tu objetivo es crear un plan de lanzamiento completo y coordinado.

PRODUCTO:
- Nombre: ${product.name}
- Descripción: ${product.description}
- Target: ${product.targetAudience}
- USP: ${product.usp}

LANZAMIENTO:
- Fecha: ${launchDate.toISOString().split('T')[0]}
- Días hasta lanzamiento: ${daysUntilLaunch}
- Tipo: ${params.launchType}

Genera un plan de lanzamiento completo con contenido coordinado para:
- T-7: Teaser campaign
- T-3: Feature reveals
- T-1: Final countdown
- T+0: Launch day
- T+7: Results & social proof

Responde SOLO con JSON:
{
  "timeline": [
    {
      "day": "T-7",
      "date": "YYYY-MM-DD",
      "theme": "tema del día",
      "activities": [
        {
          "type": "post | email | ad | landing_page | blog",
          "platform": "plataforma",
          "title": "título del contenido",
          "description": "qué crear",
          "hook": "hook principal",
          "cta": "call to action",
          "time": "HH:MM",
          "priority": "high | medium"
        }
      ]
    }
  ],
  "contentPieces": {
    "total": 20,
    "byType": {
      "posts": 8,
      "emails": 5,
      "ads": 4,
      "blogs": 2,
      "landing_pages": 1
    }
  },
  "keyMessages": [
    "mensaje clave 1",
    "mensaje clave 2",
    "mensaje clave 3"
  ],
  "anticipationBuilders": [
    "táctica de anticipación 1",
    "táctica de anticipación 2"
  ],
  "launchDayPlan": {
    "schedule": [
      {
        "time": "08:00",
        "action": "acción",
        "channel": "canal"
      }
    ],
    "contingencies": [
      "plan B si X falla"
    ]
  },
  "postLaunchPlan": {
    "day1": ["acción 1", "acción 2"],
    "week1": ["acción 1", "acción 2"]
  },
  "successMetrics": {
    "signups": "objetivo",
    "engagement": "objetivo",
    "traffic": "objetivo"
  }
}
`

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }]
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : ''
  const launchPlan = JSON.parse(text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim())

  // Crear jobs para cada pieza de contenido
  const jobs = []
  for (const day of launchPlan.timeline) {
    for (const activity of day.activities) {
      const scheduledDate = new Date(day.date)
      const [hours, minutes] = (activity.time || '09:00').split(':')
      scheduledDate.setHours(parseInt(hours), parseInt(minutes))

      const job = await prisma.marketingJob.create({
        data: {
          organizationId: params.organizationId,
          productId: params.productId,
          jobType: 'content_generation',
          status: 'pending',
          priority: activity.priority === 'high' ? 8 : 5,
          input: {
            type: activity.type,
            platform: activity.platform,
            title: activity.title,
            description: activity.description,
            hook: activity.hook,
            cta: activity.cta,
            launchDay: day.day,
            launchTheme: day.theme
          },
          scheduledAt: scheduledDate
        }
      })
      jobs.push(job)
    }
  }

  // Guardar plan de lanzamiento
  await prisma.marketingDecision.create({
    data: {
      organizationId: params.organizationId,
      agentType: 'launch_orchestrator',
      decision: launchPlan,
      reasoning: `Launch plan for ${product.name} on ${launchDate.toISOString().split('T')[0]}`,
      context: {
        productId: params.productId,
        launchDate: launchDate.toISOString(),
        launchType: params.launchType,
        jobsCreated: jobs.length
      },
      executedAt: new Date()
    }
  })

  console.log(`✅ Plan de lanzamiento creado: ${jobs.length} jobs programados`)

  return {
    launchPlan,
    jobsCreated: jobs.length,
    launchDate: launchDate.toISOString(),
    daysUntilLaunch
  }
}

// Obtener estado del lanzamiento
export async function getLaunchStatus(productId: string) {
  console.log('📊 Obteniendo estado del lanzamiento...')

  const launchDecision = await prisma.marketingDecision.findFirst({
    where: {
      agentType: 'launch_orchestrator',
      context: { path: ['productId'], equals: productId }
    },
    orderBy: { createdAt: 'desc' }
  })

  if (!launchDecision) {
    return { status: 'no_launch_planned', message: 'No hay lanzamiento planificado' }
  }

  const jobs = await prisma.marketingJob.findMany({
    where: { productId },
    orderBy: { scheduledAt: 'asc' }
  })

  const completed = jobs.filter(j => j.status === 'completed').length
  const pending = jobs.filter(j => j.status === 'pending').length
  const failed = jobs.filter(j => j.status === 'failed').length

  return {
    status: 'in_progress',
    launchDate: (launchDecision.context as any).launchDate,
    progress: {
      total: jobs.length,
      completed,
      pending,
      failed,
      percentage: Math.round((completed / jobs.length) * 100)
    },
    launchPlan: launchDecision.decision
  }
}

export default {
  orchestrateLaunch,
  getLaunchStatus
}

