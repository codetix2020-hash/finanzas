import OpenAI from 'openai'
import { prisma } from '@repo/database'

let openaiClient: OpenAI | null = null

function getOpenAIClient() {
  if (!openaiClient && process.env.OPENAI_API_KEY) {
    openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  }
  return openaiClient
}

// Generar embedding para un texto
export async function generateEmbedding(text: string): Promise<number[]> {
  const openai = getOpenAIClient()
  if (!openai) throw new Error('OpenAI not configured')

  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text
  })

  return response.data[0].embedding
}

// Guardar memoria con embedding
export async function saveMemory(
  organizationId: string,
  memoryType: 'business_dna' | 'learning' | 'prompt_template',
  content: string,
  metadata: Record<string, any> = {},
  importance: number = 5
) {
  console.log('💾 Guardando memoria marketing:', memoryType)

  const embedding = await generateEmbedding(content)

  // NOTA: MarketingMemory necesita ser añadido al schema.prisma
  // Por ahora, guardamos en MarketingDecision como workaround temporal
  // TODO: Añadir modelo MarketingMemory al schema.prisma
  
  try {
    // Buscar si ya existe una decisión similar (workaround temporal)
    const existing = await prisma.marketingDecision.findFirst({
      where: {
        organizationId,
        agentType: `memory_${memoryType}`,
        reasoning: { contains: content.substring(0, 100) }
      }
    })

    if (existing) {
      // Actualizar existente
      const updated = await prisma.marketingDecision.update({
        where: { id: existing.id },
        data: {
          decision: {
            ...(existing.decision as any),
            content,
            embedding,
            metadata,
            importance,
            updatedAt: new Date().toISOString()
          },
          reasoning: content.substring(0, 500),
          context: { memoryType, importance, ...metadata }
        }
      })
      console.log('✅ Memoria marketing actualizada:', updated.id)
      return updated
    }

    // Crear nueva
    const memory = await prisma.marketingDecision.create({
      data: {
        organizationId,
        agentType: `memory_${memoryType}`,
        decision: {
          content,
          embedding,
          metadata,
          importance,
          createdAt: new Date().toISOString()
        },
        reasoning: content.substring(0, 500),
        context: { memoryType, importance, ...metadata }
      }
    })

    console.log('✅ Memoria marketing creada:', memory.id)
    return memory
  } catch (error) {
    console.error('Error guardando memoria marketing:', error)
    throw error
  }
}

// Buscar memorias relevantes por similitud semántica
export async function searchMemory(
  organizationId: string,
  query: string,
  memoryType?: string,
  limit: number = 5
): Promise<any[]> {
  console.log('🔍 Buscando en memoria marketing:', query.substring(0, 50))

  const queryEmbedding = await generateEmbedding(query)

  // Obtener todas las memorias de la organización (workaround temporal)
  const memories = await prisma.marketingDecision.findMany({
    where: {
      organizationId,
      agentType: memoryType ? `memory_${memoryType}` : { startsWith: 'memory_' }
    },
    orderBy: { createdAt: 'desc' },
    take: 50 // Limitar para performance
  })

  // Calcular similitud coseno
  const withSimilarity = memories.map(memory => {
    const decision = memory.decision as any
    const memoryEmbedding = decision?.embedding as number[] | undefined
    
    if (!memoryEmbedding || memoryEmbedding.length === 0) {
      return { ...memory, similarity: 0 }
    }
    
    const similarity = cosineSimilarity(queryEmbedding, memoryEmbedding)
    return { 
      ...memory, 
      similarity,
      content: decision?.content || memory.reasoning,
      metadata: decision?.metadata || memory.context
    }
  })

  // Ordenar por similitud y retornar top N
  const sorted = withSimilarity
    .filter(m => m.similarity > 0.3) // Threshold mínimo
    .sort((a, b) => {
      // Priorizar por importancia si existe
      const importanceA = (a.metadata as any)?.importance || 5
      const importanceB = (b.metadata as any)?.importance || 5
      const scoreA = a.similarity * (importanceA / 10)
      const scoreB = b.similarity * (importanceB / 10)
      return scoreB - scoreA
    })
    .slice(0, limit)

  console.log(`✅ Encontradas ${sorted.length} memorias marketing relevantes`)
  return sorted
}

// Obtener memoria por tipo
export async function getMemoryByType(
  organizationId: string,
  memoryType: string
): Promise<any[]> {
  return prisma.marketingDecision.findMany({
    where: { 
      organizationId, 
      agentType: `memory_${memoryType}` 
    },
    orderBy: { createdAt: 'desc' }
  })
}

// Similitud coseno entre dos vectores
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0
  
  let dotProduct = 0
  let normA = 0
  let normB = 0
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  
  const denominator = Math.sqrt(normA) * Math.sqrt(normB)
  return denominator === 0 ? 0 : dotProduct / denominator
}

