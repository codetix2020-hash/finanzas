import { publicProcedure } from "../../orpc/procedures";
import { 
  guardsFinancial,
  guardsReputation,
  guardsLegal,
  guardsRunAll
} from './procedures/guards';
import { 
  facebookAdsGenerateStrategy,
  facebookAdsCreateCampaign,
  facebookAdsGenerateCreatives,
  facebookAdsOptimize,
  facebookAdsUpdateStatus,
  facebookAdsSyncMetrics
} from './procedures/facebook-ads';
import { 
  googleAdsKeywordResearch,
  googleAdsGenerateStrategy,
  googleAdsCreateCampaign,
  googleAdsGenerateRSA,
  googleAdsOptimize,
  googleAdsSyncMetrics
} from './procedures/google-ads';
import { 
  crmCreateLead,
  crmScoreLead,
  crmQualifyLead,
  crmGenerateFollowUp,
  crmScoreAll,
  crmQualifyHot,
  crmGetLeads,
  crmGetStats
} from './procedures/crm';
import { 
  analyticsDashboard,
  analyticsContentPerformance,
  analyticsCampaignROI,
  analyticsInsights,
  analyticsWeeklyReport
} from './procedures/analytics';
import {
  contentGenerate,
  contentGenerateVariations,
  contentOptimizeSEO
} from './procedures/content';
import {
  emailCreateCampaign,
  emailSendCampaign,
  emailSegmentAudience,
  emailRunABTest
} from './procedures/email';
import {
  socialGeneratePost,
  socialAnalyzeSentiment,
  socialGetBestPostingTimes
} from './procedures/social';
import {
  strategyCoordinateAgents,
  strategyOptimizeBudget,
  strategyGenerateReport
} from './procedures/strategy';
import {
  visualGenerate,
  visualVariants,
  visualOptimizePrompt
} from './procedures/visual';
import {
  voiceGenerate,
  voiceScript,
  voiceComplete
} from './procedures/voice';
import {
  competitorAnalyze,
  competitorMonitor
} from './procedures/competitor';
import {
  launchOrchestrate,
  launchStatus
} from './procedures/launch';
import {
  orchestrationRun,
  orchestrationMaster,
  orchestrationProduct,
  orchestrationSaveMemory,
  orchestrationSearchMemory
} from './procedures/orchestration';

// Aplanar el router para que coincida con la estructura de finance
// Router actualizado con todas las rutas HTTP - 2024
export const marketingRouter = publicProcedure.router({
  // Endpoint de prueba (sin autenticación)
  test: publicProcedure.handler(async () => {
    return { 
      success: true, 
      message: 'Marketing router works!',
      timestamp: new Date().toISOString()
    };
  }),
  // Guards
  guardsFinancial,
  guardsReputation,
  guardsLegal,
  guardsRunAll,
  
  // Facebook Ads
  facebookAdsGenerateStrategy,
  facebookAdsCreateCampaign,
  facebookAdsGenerateCreatives,
  facebookAdsOptimize,
  facebookAdsUpdateStatus,
  facebookAdsSyncMetrics,
  
  // Google Ads
  googleAdsKeywordResearch,
  googleAdsGenerateStrategy,
  googleAdsCreateCampaign,
  googleAdsGenerateRSA,
  googleAdsOptimize,
  googleAdsSyncMetrics,
  
  // CRM
  crmCreateLead,
  crmScoreLead,
  crmQualifyLead,
  crmGenerateFollowUp,
  crmScoreAll,
  crmQualifyHot,
  crmGetLeads,
  crmGetStats,
  
  // Analytics
  analyticsDashboard,
  analyticsContentPerformance,
  analyticsCampaignROI,
  analyticsInsights,
  analyticsWeeklyReport,
  
  // Content
  contentGenerate,
  contentGenerateVariations,
  contentOptimizeSEO,
  
  // Email
  emailCreateCampaign,
  emailSendCampaign,
  emailSegmentAudience,
  emailRunABTest,
  
  // Social
  socialGeneratePost,
  socialAnalyzeSentiment,
  socialGetBestPostingTimes,
  
  // Strategy
  strategyCoordinateAgents,
  strategyOptimizeBudget,
  strategyGenerateReport,
  
  // Visual
  visualGenerate,
  visualVariants,
  visualOptimizePrompt,
  
  // Voice
  voiceGenerate,
  voiceScript,
  voiceComplete,
  
  // Competitor
  competitorAnalyze,
  competitorMonitor,
  
  // Launch
  launchOrchestrate,
  launchStatus,
  
  // Orchestration
  orchestrationRun,
  orchestrationMaster,
  orchestrationProduct,
  orchestrationSaveMemory,
  orchestrationSearchMemory,
});
