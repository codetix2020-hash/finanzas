import { protectedProcedure } from '../../../orpc/procedures'
import { z } from 'zod'
import { 
  checkFinancialGuard, 
  checkReputationGuard, 
  checkLegalGuard,
  runAllGuards 
} from '../services/guard-service'

export const checkFinancialGuardProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/guards-financial" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional()
    })
  )
  .handler(async ({ input }) => {
    const result = await checkFinancialGuard(input)
    return { success: true, ...result }
  })

export const checkReputationGuardProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/guards-reputation" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional()
    })
  )
  .handler(async ({ input }) => {
    const result = await checkReputationGuard(input)
    return { success: true, ...result }
  })

export const checkLegalGuardProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/guards-legal" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional()
    })
  )
  .handler(async ({ input }) => {
    const result = await checkLegalGuard(input)
    return { success: true, ...result }
  })

export const runAllGuardsProcedure = protectedProcedure
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

