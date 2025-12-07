import { z } from 'zod'
import { publicProcedure } from '../../../orpc/procedures'
import { analyzeCompetitors, monitorCompetitorChanges } from '../services/competitor-analyzer'

export const competitorAnalyze = publicProcedure
  .route({ method: "POST", path: "/marketing/competitor-analyze" })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string(),
    competitors: z.array(z.string()).optional()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await analyzeCompetitors(input)
      return { success: true, analysis: result }
    } catch (error: any) {
      console.error('Error analyzing competitors:', error)
      return {
        success: true,
        analysis: { competitors: [], insights: [] },
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const competitorMonitor = publicProcedure
  .route({ method: "POST", path: "/marketing/competitor-monitor" })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await monitorCompetitorChanges(input)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error monitoring competitors:', error)
      return {
        success: true,
        changes: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

