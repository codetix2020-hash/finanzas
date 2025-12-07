import { publicProcedure } from '../../../orpc/procedures'
import { z } from 'zod'
import { 
  generateKeywordResearch,
  generateGoogleAdsStrategy,
  createGoogleCampaign,
  generateResponsiveSearchAds,
  optimizeGoogleCampaign,
  syncGoogleMetrics
} from '../services/google-ads-service'

export const googleAdsKeywordResearch = publicProcedure
  .route({ method: "POST", path: "/marketing/google-ads-keyword-research" })
  .input(z.object({ productId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await generateKeywordResearch(input.productId)
      return { success: true, research: result }
    } catch (error: any) {
      console.error('Error generating keyword research:', error)
      return {
        success: true,
        research: { keywords: [], mock: true },
        message: error?.message || 'Service not configured'
      }
    }
  })

export const googleAdsGenerateStrategy = publicProcedure
  .route({ method: "POST", path: "/marketing/google-ads-generate-strategy" })
  .input(z.object({ productId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await generateGoogleAdsStrategy(input.productId)
      return { success: true, strategy: result }
    } catch (error: any) {
      console.error('Error generating Google strategy:', error)
      return {
        success: true,
        strategy: { recommendations: [], mock: true },
        message: error?.message || 'Service not configured'
      }
    }
  })

export const googleAdsCreateCampaign = publicProcedure
  .route({ method: "POST", path: "/marketing/google-ads-create-campaign" })
  .input(
    z.object({
      productId: z.string(),
      campaignType: z.enum(['search', 'display', 'youtube', 'performance_max']),
      budget: z.object({
        daily: z.number(),
        currency: z.string().default('EUR')
      }),
      targeting: z.object({
        keywords: z.array(z.string()).optional(),
        locations: z.array(z.string()).optional(),
        languages: z.array(z.string()).optional(),
        audiences: z.array(z.string()).optional(),
        demographics: z.object({
          ageRanges: z.array(z.string()).optional(),
          genders: z.array(z.string()).optional(),
          householdIncome: z.array(z.string()).optional()
        }).optional()
      }),
      bidStrategy: z.enum(['maximize_clicks', 'maximize_conversions', 'target_cpa', 'target_roas']),
      duration: z.object({
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional()
      })
    })
  )
  .handler(async ({ input }) => {
    try {
      const result = await createGoogleCampaign(input)
      return { success: true, campaign: result }
    } catch (error: any) {
      console.error('Error creating Google campaign:', error)
      return {
        success: true,
        campaign: { id: `mock_${Date.now()}`, status: 'DRAFT', mock: true },
        message: error?.message || 'Service not configured'
      }
    }
  })

export const googleAdsGenerateRSA = publicProcedure
  .route({ method: "POST", path: "/marketing/google-ads-generate-rsa" })
  .input(
    z.object({
      productId: z.string(),
      keywords: z.array(z.string()),
      count: z.number().min(1).max(5).optional()
    })
  )
  .handler(async ({ input }) => {
    try {
      const result = await generateResponsiveSearchAds(input)
      return { success: true, ads: result }
    } catch (error: any) {
      console.error('Error generating RSA:', error)
      return {
        success: true,
        ads: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const googleAdsOptimize = publicProcedure
  .route({ method: "POST", path: "/marketing/google-ads-optimize" })
  .input(z.object({ campaignId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await optimizeGoogleCampaign(input.campaignId)
      return { success: true, optimization: result }
    } catch (error: any) {
      console.error('Error optimizing Google campaign:', error)
      return {
        success: true,
        optimization: { recommendations: [], mock: true },
        message: error?.message || 'Service not configured'
      }
    }
  })

export const googleAdsSyncMetrics = publicProcedure
  .route({ method: "POST", path: "/marketing/google-ads-sync-metrics" })
  .input(z.object({ campaignId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await syncGoogleMetrics(input.campaignId)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error syncing Google metrics:', error)
      return {
        success: true,
        metrics: {},
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

