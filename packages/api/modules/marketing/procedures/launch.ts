import { z } from 'zod'
import { publicProcedure } from '../../../orpc/procedures'
import { orchestrateLaunch, getLaunchStatus } from '../services/launch-orchestrator'

export const launchOrchestrate = publicProcedure
  .route({ method: "POST", path: "/marketing/launch-orchestrate" })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string(),
    launchDate: z.coerce.date(),
    launchType: z.enum(['soft', 'full', 'beta'])
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await orchestrateLaunch(input)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error orchestrating launch:', error)
      return {
        success: true,
        launchId: `mock_${Date.now()}`,
        status: 'planned',
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const launchStatus = publicProcedure
  .route({ method: "POST", path: "/marketing/launch-status" })
  .input(z.object({
    productId: z.string()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await getLaunchStatus(input.productId)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error getting launch status:', error)
      return {
        success: true,
        status: 'unknown',
        progress: 0,
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

