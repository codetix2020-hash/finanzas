import { z } from 'zod'
import { protectedProcedure } from '../../../orpc/procedures'
import { analyzeCompetitors, monitorCompetitorChanges } from '../services/competitor-analyzer'

export const analyzeCompetitorsProcedure = protectedProcedure
  .route({ method: 'POST', path: '/analyze-competitors' })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string(),
    competitors: z.array(z.string()).optional()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    const result = await analyzeCompetitors(input)
    return { success: true, analysis: result }
  })

export const monitorCompetitorChangesProcedure = protectedProcedure
  .route({ method: 'POST', path: '/monitor-competitor-changes' })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    const result = await monitorCompetitorChanges(input)
    return { success: true, ...result }
  })

