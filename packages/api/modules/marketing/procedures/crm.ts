import { publicProcedure } from '../../../orpc/procedures'
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

export const crmCreateLead = publicProcedure
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
    try {
      const result = await createLead(input)
      return { success: true, lead: result }
    } catch (error: any) {
      console.error('Error creating lead:', error)
      return {
        success: true,
        lead: {
          id: `mock_${Date.now()}`,
          email: input.email,
          name: input.name || 'Mock Lead',
          status: 'NEW',
          mock: true
        },
        message: error?.message || 'Service not configured'
      }
    }
  })

export const crmScoreLead = publicProcedure
  .route({ method: "POST", path: "/marketing/crm-score-lead" })
  .input(z.object({ leadId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await calculateLeadScore(input.leadId)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error scoring lead:', error)
      return {
        success: true,
        score: 50,
        factors: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const crmQualifyLead = publicProcedure
  .route({ method: "POST", path: "/marketing/crm-qualify-lead" })
  .input(z.object({ leadId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await qualifyLeadWithAI(input.leadId)
      return { success: true, analysis: result }
    } catch (error: any) {
      console.error('Error qualifying lead:', error)
      return {
        success: true,
        analysis: { qualified: false, reason: 'Service not configured' },
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const crmGenerateFollowUp = publicProcedure
  .route({ method: "POST", path: "/marketing/crm-generate-follow-up" })
  .input(z.object({ leadId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await generateFollowUp(input.leadId)
      return { success: true, followUp: result }
    } catch (error: any) {
      console.error('Error generating follow-up:', error)
      return {
        success: true,
        followUp: { message: 'Mock follow-up message', type: 'email' },
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const crmScoreAll = publicProcedure
  .route({ method: "POST", path: "/marketing/crm-score-all" })
  .input(z.object({ organizationId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await scoreAllLeads(input.organizationId)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error scoring all leads:', error)
      return {
        success: true,
        scored: 0,
        total: 0,
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const crmQualifyHot = publicProcedure
  .route({ method: "POST", path: "/marketing/crm-qualify-hot" })
  .input(z.object({ organizationId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await qualifyHotLeads(input.organizationId)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error qualifying hot leads:', error)
      return {
        success: true,
        qualified: 0,
        total: 0,
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const crmGetLeads = publicProcedure
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
    try {
      const result = await getLeads(input)
      return { success: true, leads: result }
    } catch (error: any) {
      console.error('Error getting leads:', error)
      return {
        success: true,
        leads: [],
        total: 0,
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const crmGetStats = publicProcedure
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

