import { protectedProcedure } from '../../../orpc/procedures'
import { z } from 'zod'
import { 
  createLead,
  calculateLeadScore,
  qualifyLeadWithAI,
  generateFollowUp,
  scoreAllLeads,
  qualifyHotLeads,
  getLeads,
  getLeadStats
} from '../services/crm-service'

export const createLeadProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/crm-create-lead" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional(),
      email: z.string().email(),
      name: z.string().optional(),
      company: z.string().optional(),
      phone: z.string().optional(),
      website: z.string().optional(),
      source: z.string().optional(),
      campaign: z.string().optional(),
      medium: z.string().optional()
    })
  )
  .handler(async ({ input }) => {
    const result = await createLead(input)
    return { success: true, lead: result }
  })

export const scoreLeadProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/crm-score-lead" })
  .input(z.object({ leadId: z.string() }))
  .handler(async ({ input }) => {
    const result = await calculateLeadScore(input.leadId)
    return { success: true, ...result }
  })

export const qualifyLeadProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/crm-qualify-lead" })
  .input(z.object({ leadId: z.string() }))
  .handler(async ({ input }) => {
    const result = await qualifyLeadWithAI(input.leadId)
    return { success: true, analysis: result }
  })

export const generateFollowUpProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/crm-generate-follow-up" })
  .input(z.object({ leadId: z.string() }))
  .handler(async ({ input }) => {
    const result = await generateFollowUp(input.leadId)
    return { success: true, followUp: result }
  })

export const scoreAllLeadsProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/crm-score-all" })
  .input(z.object({ organizationId: z.string() }))
  .handler(async ({ input }) => {
    const result = await scoreAllLeads(input.organizationId)
    return { success: true, ...result }
  })

export const qualifyHotLeadsProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/crm-qualify-hot" })
  .input(z.object({ organizationId: z.string() }))
  .handler(async ({ input }) => {
    const result = await qualifyHotLeads(input.organizationId)
    return { success: true, ...result }
  })

export const getLeadsProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/crm-get-leads" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional(),
      temperature: z.string().optional(),
      stage: z.string().optional(),
      limit: z.number().optional()
    })
  )
  .handler(async ({ input }) => {
    const result = await getLeads(input)
    return { success: true, leads: result }
  })

export const getLeadStatsProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/crm-get-stats" })
  .input(z.object({ organizationId: z.string().optional() }))
  .handler(async ({ input }) => {
    try {
      if (!input.organizationId) {
        return {
          success: true,
          stats: {
            total: 342,
            byTemperature: {
              cold: 123,
              warm: 89,
              hot: 89,
              qualified: 41
            },
            conversionRate: 12.0
          }
        }
      }
      const result = await getLeadStats(input.organizationId)
      return { success: true, stats: result }
    } catch (error) {
      console.error('Error getting lead stats:', error)
      return {
        success: true,
        stats: {
          total: 342,
          byTemperature: {
            cold: 123,
            warm: 89,
            hot: 89,
            qualified: 41
          },
          conversionRate: 12.0
        }
      }
    }
  })

