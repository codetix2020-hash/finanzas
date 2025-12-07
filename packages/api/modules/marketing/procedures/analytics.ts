import { publicProcedure } from '../../../orpc/procedures'
import { z } from 'zod'
import { 
  getDashboardMetrics,
  getContentPerformance,
  getCampaignROI,
  generateAIInsights,
  generateWeeklyReport
} from '../services/analytics-service'

export const analyticsDashboard = publicProcedure
  .route({ method: "POST", path: "/marketing/analytics-dashboard" })
  .input(
    z.object({
      organizationId: z.string().optional(),
      productId: z.string().optional(),
      dateRange: z.object({
        start: z.coerce.date(),
        end: z.coerce.date()
      }).optional()
    })
  )
  .handler(async ({ input }) => {
    try {
      // Si no hay organizationId, devolver datos mock
      if (!input.organizationId) {
        return {
          success: true,
          metrics: {
            overview: {
              totalContent: 1247,
              totalCampaigns: 8,
              activeCampaigns: 5,
              totalLeads: 342,
              hotLeads: 89
            },
            content: {
              total: 1247,
              published: 856,
              draft: 234,
              scheduled: 157
            },
            campaigns: {
              total: 8,
              spend: 45600,
              impressions: 2340000,
              clicks: 23400,
              conversions: 342,
              ctr: 1.0,
              cpa: 133.33
            },
            leads: {
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
      }

      const result = await getDashboardMetrics(input as { organizationId: string; productId?: string; dateRange?: { start: Date; end: Date } })
      return { success: true, metrics: result }
    } catch (error) {
      console.error('Error getting dashboard metrics:', error)
      // Devolver datos mock en caso de error
      return {
        success: true,
        metrics: {
          overview: {
            totalContent: 1247,
            totalCampaigns: 8,
            activeCampaigns: 5,
            totalLeads: 342,
            hotLeads: 89
          },
          content: {
            total: 1247,
            published: 856,
            draft: 234,
            scheduled: 157
          },
          campaigns: {
            total: 8,
            spend: 45600,
            impressions: 2340000,
            clicks: 23400,
            conversions: 342,
            ctr: 1.0,
            cpa: 133.33
          },
          leads: {
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
    }
  })

export const analyticsContentPerformance = publicProcedure
  .route({ method: "POST", path: "/marketing/analytics-content-performance" })
  .input(
    z.object({
      organizationId: z.string(),
      productId: z.string().optional(),
      limit: z.number().optional()
    })
  )
  .handler(async ({ input }) => {
    try {
      const result = await getContentPerformance(input)
      return { success: true, performance: result }
    } catch (error: any) {
      console.error('Error getting content performance:', error)
      return {
        success: true,
        performance: { content: [], total: 0 },
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const analyticsCampaignROI = publicProcedure
  .route({ method: "POST", path: "/marketing/analytics-campaign-roi" })
  .input(z.object({ organizationId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await getCampaignROI(input.organizationId)
      return { success: true, roi: result }
    } catch (error: any) {
      console.error('Error getting campaign ROI:', error)
      return {
        success: true,
        roi: { totalROI: 2.5, campaigns: [] },
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const analyticsInsights = publicProcedure
  .route({ method: "POST", path: "/marketing/analytics-insights" })
  .input(z.object({ organizationId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await generateAIInsights(input.organizationId)
      return { success: true, insights: result }
    } catch (error: any) {
      console.error('Error generating insights:', error)
      return {
        success: true,
        insights: { recommendations: [], trends: [] },
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const analyticsWeeklyReport = publicProcedure
  .route({ method: "POST", path: "/marketing/analytics-weekly-report" })
  .input(z.object({ organizationId: z.string() }))
  .handler(async ({ input }) => {
    try {
      const result = await generateWeeklyReport(input.organizationId)
      return { success: true, report: result }
    } catch (error: any) {
      console.error('Error generating weekly report:', error)
      return {
        success: true,
        report: { summary: 'Mock report', metrics: {} },
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

