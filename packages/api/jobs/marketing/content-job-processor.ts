import { prisma } from '@repo/database'

/**
 * Procesa jobs de generación de contenido pendientes
 * Se ejecuta cada 5 minutos
 */
export async function processContentJobs() {
  console.log('⚙️ Procesando jobs de contenido marketing...')
  
  try {
    // Obtener jobs pendientes ordenados por prioridad
    const pendingJobs = await prisma.marketingJob.findMany({
      where: {
        status: 'pending',
        OR: [
          { scheduledAt: null },
          { scheduledAt: { lte: new Date() } }
        ],
        attempts: { lt: prisma.marketingJob.fields.maxAttempts }
      },
      orderBy: [
        { priority: 'desc' },
        { createdAt: 'asc' }
      ],
      take: 10, // Procesar máximo 10 jobs por ciclo
      include: {
        product: { select: { name: true } }
      }
    })
    
    console.log(`📋 Jobs pendientes: ${pendingJobs.length}`)
    
    if (pendingJobs.length === 0) {
      return { processed: 0, message: 'No hay jobs pendientes' }
    }
    
    const results = []
    
    for (const job of pendingJobs) {
      try {
        // Marcar como running
        await prisma.marketingJob.update({
          where: { id: job.id },
          data: {
            status: 'running',
            startedAt: new Date(),
            attempts: { increment: 1 },
            progress: 10
          }
        })
        
        console.log(`🔄 Procesando job ${job.id}: ${job.jobType}`)
        
        // Procesar según tipo
        let output: any
        
        switch (job.jobType) {
          case 'content_generation':
            output = await processContentGeneration(job)
            break
          case 'image_generation':
            output = await processImageGeneration(job)
            break
          case 'email_sequence':
            output = await processEmailSequence(job)
            break
          case 'voice_generation':
            output = await processVoiceGeneration(job)
            break
          case 'campaign_optimization':
            output = await processCampaignOptimization(job)
            break
          default:
            throw new Error(`Tipo de job no soportado: ${job.jobType}`)
        }
        
        // Marcar como completado
        await prisma.marketingJob.update({
          where: { id: job.id },
          data: {
            status: 'completed',
            completedAt: new Date(),
            output,
            progress: 100
          }
        })
        
        console.log(`✅ Job ${job.id} completado`)
        results.push({ jobId: job.id, success: true })
        
      } catch (error) {
        console.error(`❌ Job ${job.id} falló:`, error)
        
        const updatedJob = await prisma.marketingJob.update({
          where: { id: job.id },
          data: {
            status: job.attempts + 1 >= job.maxAttempts ? 'failed' : 'pending',
            error: String(error),
            progress: 0
          }
        })
        
        results.push({ jobId: job.id, success: false, error: String(error) })
      }
    }
    
    const successful = results.filter(r => r.success).length
    console.log(`\n📊 Jobs procesados: ${successful}/${pendingJobs.length} exitosos`)
    
    return {
      processed: pendingJobs.length,
      successful,
      failed: pendingJobs.length - successful,
      results
    }
    
  } catch (error) {
    console.error('❌ Error procesando jobs:', error)
    return { success: false, error: String(error) }
  }
}

// Funciones auxiliares para cada tipo de job
async function processContentGeneration(job: any) {
  // TODO: Integrar con content-agent.ts
  const input = job.input as any
  console.log(`  📝 Generando contenido: ${input.type} para ${input.platform}`)
  
  // Actualizar progreso
  await prisma.marketingJob.update({
    where: { id: job.id },
    data: { progress: 50 }
  })
  
  // Por ahora retorna placeholder - integrar con ContentAgent
  return {
    message: 'Content generation completed',
    type: input.type,
    platform: input.platform
  }
}

async function processImageGeneration(job: any) {
  // TODO: Integrar con visual-agent.ts cuando exista
  const input = job.input as any
  console.log(`  🎨 Generando imagen: ${input.prompt?.substring(0, 50)}...`)
  
  await prisma.marketingJob.update({
    where: { id: job.id },
    data: { progress: 50 }
  })
  
  return {
    message: 'Image generation placeholder',
    prompt: input.prompt
  }
}

async function processEmailSequence(job: any) {
  // TODO: Integrar con email-agent.ts
  const input = job.input as any
  console.log(`  📧 Generando secuencia email: ${input.sequenceType}`)
  
  await prisma.marketingJob.update({
    where: { id: job.id },
    data: { progress: 50 }
  })
  
  return {
    message: 'Email sequence placeholder',
    sequenceType: input.sequenceType
  }
}

async function processVoiceGeneration(job: any) {
  // TODO: Integrar con voice-agent.ts cuando exista
  const input = job.input as any
  console.log(`  🎙️ Generando voz: ${input.script?.substring(0, 50)}...`)
  
  await prisma.marketingJob.update({
    where: { id: job.id },
    data: { progress: 50 }
  })
  
  return {
    message: 'Voice generation placeholder',
    script: input.script
  }
}

async function processCampaignOptimization(job: any) {
  // TODO: Integrar con strategy-agent.ts
  const input = job.input as any
  console.log(`  📈 Optimizando campaña: ${input.campaignId}`)
  
  await prisma.marketingJob.update({
    where: { id: job.id },
    data: { progress: 50 }
  })
  
  return {
    message: 'Campaign optimization placeholder',
    campaignId: input.campaignId
  }
}

export default processContentJobs

