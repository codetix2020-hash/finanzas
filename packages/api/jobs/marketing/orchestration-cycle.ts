import { prisma } from '@repo/database'
import { orchestrateMaster } from '../../src/lib/ai/orchestrator'

/**
 * Job de orquestación de marketing - Se ejecuta cada 6 horas
 * Coordina todos los agentes de marketing para cada organización
 */
export async function runOrchestrationCycle() {
  console.log('🔄 Iniciando ciclo de orquestación de marketing...')
  
  const startTime = Date.now()
  
  try {
    // Obtener todas las organizaciones con marketing activo
    const organizations = await prisma.organization.findMany({
      where: {
        // Solo organizaciones con productos que tienen marketing habilitado
        saasProducts: {
          some: {
            marketingEnabled: true
          }
        }
      },
      select: { id: true, name: true }
    })
    
    console.log(`📦 Organizaciones a procesar: ${organizations.length}`)
    
    if (organizations.length === 0) {
      console.log('⚠️ No hay organizaciones con marketing activo')
      return { success: true, processed: 0 }
    }
    
    const results = []
    
    for (const org of organizations) {
      try {
        console.log(`\n🎯 Orquestando marketing para: ${org.name}`)
        const result = await orchestrateMaster(org.id)
        results.push({ orgId: org.id, success: true, result })
        console.log(`✅ ${org.name}: Completado`)
      } catch (error) {
        console.error(`❌ ${org.name}: Error -`, error)
        results.push({ orgId: org.id, success: false, error: String(error) })
      }
    }
    
    const successful = results.filter(r => r.success).length
    const failed = results.filter(r => !r.success).length
    const duration = ((Date.now() - startTime) / 1000).toFixed(2)
    
    console.log(`\n============================================`)
    console.log(`📊 CICLO DE ORQUESTACIÓN COMPLETADO`)
    console.log(`   Exitosos: ${successful}`)
    console.log(`   Fallidos: ${failed}`)
    console.log(`   Duración: ${duration}s`)
    console.log(`============================================\n`)
    
    return {
      success: true,
      processed: organizations.length,
      successful,
      failed,
      duration: `${duration}s`,
      results
    }
    
  } catch (error) {
    console.error('❌ Error en ciclo de orquestación:', error)
    return { success: false, error: String(error) }
  }
}

// Exportar para uso directo o con Trigger.dev
export default runOrchestrationCycle

