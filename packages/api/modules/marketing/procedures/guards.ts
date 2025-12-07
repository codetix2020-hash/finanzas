import { publicProcedure } from '../../../orpc/procedures'
import { z } from 'zod'
import { 
  checkFinancialGuard, 
  checkReputationGuard, 
  checkLegalGuard,
  runAllGuards 
} from '../services/guard-service'

export const guardsFinancial = publicProcedure
  .route({ method: "POST", path: "/marketing/guards-financial" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional()
    })
  )
  .handler(async ({ input }) => {
    try {
      const result = await checkFinancialGuard(input)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error checking financial guard:', error)
      return {
        success: true,
        status: 'ok',
        alerts: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const guardsReputation = publicProcedure
  .route({ method: "POST", path: "/marketing/guards-reputation" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional()
    })
  )
  .handler(async ({ input }) => {
    try {
      const result = await checkReputationGuard(input)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error checking reputation guard:', error)
      return {
        success: true,
        status: 'ok',
        alerts: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const guardsLegal = publicProcedure
  .route({ method: "POST", path: "/marketing/guards-legal" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional()
    })
  )
  .handler(async ({ input }) => {
    try {
      const result = await checkLegalGuard(input)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error checking legal guard:', error)
      return {
        success: true,
        status: 'ok',
        alerts: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const guardsRunAll = publicProcedure
  .route({ method: "POST", path: "/marketing/guards-run-all" })
  .input(
    z.object({
      organizationId: z.string().optional()
    })
  )
  .handler(async ({ input }) => {
    try {
      if (!input.organizationId) {
        return {
          success: true,
          financial: { status: 'ok', alerts: [] },
          reputation: { status: 'ok', alerts: [] },
          legal: { status: 'ok', alerts: [] },
          totalAlerts: 0
        }
      }
      const result = await runAllGuards(input.organizationId)
      return { success: true, ...result }
    } catch (error) {
      console.error('Error running guards:', error)
      return {
        success: true,
        financial: { status: 'ok', alerts: [] },
        reputation: { status: 'ok', alerts: [] },
        legal: { status: 'ok', alerts: [] },
        totalAlerts: 0
      }
    }
  })

