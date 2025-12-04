import { protectedProcedure } from '../../../orpc/procedures'
import { z } from 'zod'
import { 
  generateCampaignStrategy,
  createCampaign,
  generateAdCreatives,
  optimizeCampaign,
  updateCampaignStatus,
  syncCampaignMetrics
} from '../services/facebook-ads-service'

export const generateFBStrategyProcedure = protectedProcedure
  .input(z.object({ productId: z.string() }))
  .handler(async ({ input }) => {
    const result = await generateCampaignStrategy(input.productId)
    return { success: true, strategy: result }
  })

export const createFBCampaignProcedure = protectedProcedure
  .input(
    z.object({
      productId: z.string(),
      objective: z.enum(['awareness', 'traffic', 'engagement', 'leads', 'sales']),
      budget: z.object({
        daily: z.number(),
        currency: z.string().default('EUR')
      }),
      targeting: z.object({
        ageMin: z.number().optional(),
        ageMax: z.number().optional(),
        genders: z.array(z.enum(['male', 'female', 'all'])).optional(),
        locations: z.array(z.string()).optional(),
        interests: z.array(z.string()).optional(),
        behaviors: z.array(z.string()).optional()
      }),
      duration: z.object({
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional()
      })
    })
  )
  .handler(async ({ input }) => {
    const result = await createCampaign(input)
    return { success: true, campaign: result }
  })

export const generateFBCreativesProcedure = protectedProcedure
  .input(
    z.object({
      productId: z.string(),
      campaignObjective: z.string(),
      count: z.number().min(1).max(10).optional()
    })
  )
  .handler(async ({ input }) => {
    const result = await generateAdCreatives(input)
    return { success: true, creatives: result }
  })

export const optimizeFBCampaignProcedure = protectedProcedure
  .input(z.object({ campaignId: z.string() }))
  .handler(async ({ input }) => {
    const result = await optimizeCampaign(input.campaignId)
    return { success: true, optimization: result }
  })

export const updateFBCampaignStatusProcedure = protectedProcedure
  .input(
    z.object({
      campaignId: z.string(),
      status: z.enum(['ACTIVE', 'PAUSED', 'DRAFT'])
    })
  )
  .handler(async ({ input }) => {
    const result = await updateCampaignStatus(input.campaignId, input.status)
    return { success: true, campaign: result }
  })

export const syncFBMetricsProcedure = protectedProcedure
  .input(z.object({ campaignId: z.string() }))
  .handler(async ({ input }) => {
    const result = await syncCampaignMetrics(input.campaignId)
    return { success: true, ...result }
  })

