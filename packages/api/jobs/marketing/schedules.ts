/**
 * Configuración de schedules para jobs de MarketingOS
 * Usar con Trigger.dev o cron jobs
 */

export const MARKETING_SCHEDULES = {
  // Orquestación principal - cada 6 horas
  orchestration: {
    name: 'marketing-orchestration',
    cron: '0 */6 * * *', // Cada 6 horas
    description: 'Orquesta estrategia de marketing para todos los productos'
  },
  
  // Procesamiento de jobs - cada 5 minutos
  jobProcessor: {
    name: 'marketing-job-processor',
    cron: '*/5 * * * *', // Cada 5 minutos
    description: 'Procesa jobs de contenido, imágenes, emails, etc.'
  },
  
  // Verificación de guardias - cada 30 minutos
  guardsCheck: {
    name: 'marketing-guards-check',
    cron: '*/30 * * * *', // Cada 30 minutos
    description: 'Verifica guardias financieras, reputacionales y legales'
  },
  
  // Análisis de competidores - semanal
  competitorAnalysis: {
    name: 'marketing-competitor-analysis',
    cron: '0 8 * * 1', // Lunes a las 8:00
    description: 'Analiza competidores y actualiza insights'
  },
  
  // Reporte semanal - domingos
  weeklyReport: {
    name: 'marketing-weekly-report',
    cron: '0 18 * * 0', // Domingo a las 18:00
    description: 'Genera reporte semanal de marketing'
  },
  
  // Sincronización de métricas de ads - cada hora
  adMetricsSync: {
    name: 'marketing-ad-metrics-sync',
    cron: '0 * * * *', // Cada hora
    description: 'Sincroniza métricas de Facebook/Google Ads'
  }
}

// Helper para ejecutar jobs manualmente
export async function runScheduledJob(jobName: keyof typeof MARKETING_SCHEDULES) {
  const schedule = MARKETING_SCHEDULES[jobName]
  console.log(`🕐 Ejecutando job: ${schedule.name}`)
  console.log(`   ${schedule.description}`)
  
  switch (jobName) {
    case 'orchestration':
      const { runOrchestrationCycle } = await import('./orchestration-cycle')
      return runOrchestrationCycle()
      
    case 'jobProcessor':
      const { processContentJobs } = await import('./content-job-processor')
      return processContentJobs()
      
    case 'guardsCheck':
      const { guardsCheckJob } = await import('./guards-check')
      return guardsCheckJob()
      
    default:
      console.log(`⚠️ Job ${jobName} no implementado aún`)
      return { message: `Job ${jobName} pendiente de implementación` }
  }
}

// Exportar para uso con Trigger.dev
export default MARKETING_SCHEDULES

