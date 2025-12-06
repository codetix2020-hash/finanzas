import { publicProcedure } from "../../orpc/procedures";
import { 
  checkFinancialGuardProcedure,
  checkReputationGuardProcedure,
  checkLegalGuardProcedure,
  runAllGuardsProcedure
} from './procedures/guards';
import { 
  generateFBStrategyProcedure,
  createFBCampaignProcedure,
  generateFBCreativesProcedure,
  optimizeFBCampaignProcedure,
  updateFBCampaignStatusProcedure,
  syncFBMetricsProcedure
} from './procedures/facebook-ads';
import { 
  generateKeywordResearchProcedure,
  generateGoogleStrategyProcedure,
  createGoogleCampaignProcedure,
  generateRSAProcedure,
  optimizeGoogleCampaignProcedure,
  syncGoogleMetricsProcedure
} from './procedures/google-ads';
import { 
  createLeadProcedure,
  scoreLeadProcedure,
  qualifyLeadProcedure,
  generateFollowUpProcedure,
  scoreAllLeadsProcedure,
  qualifyHotLeadsProcedure,
  getLeadsProcedure,
  getLeadStatsProcedure
} from './procedures/crm';
import { 
  analyticsDashboard,
  analyticsContentPerformance,
  analyticsCampaignROI,
  analyticsInsights,
  analyticsWeeklyReport
} from './procedures/analytics';
import {
  generateContentProcedure,
  generateContentVariationsProcedure,
  optimizeContentForSEOProcedure
} from './procedures/content';
import {
  createEmailCampaignProcedure,
  sendEmailCampaignProcedure,
  segmentAudienceProcedure,
  runABTestProcedure
} from './procedures/email';
import {
  generateSocialPostProcedure,
  analyzeSocialSentimentProcedure,
  getBestPostingTimesProcedure
} from './procedures/social';
import {
  coordinateMarketingAgentsProcedure,
  optimizeBudgetProcedure,
  generateStrategicReportProcedure
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
  analyzeCompetitorsProcedure,
  monitorCompetitorChangesProcedure
} from './procedures/competitor';
import {
  orchestrateLaunchProcedure,
  getLaunchStatusProcedure
} from './procedures/launch';
import {
  orchestrateProcedure,
  orchestrateMasterProcedure,
  orchestrateProductProcedure,
  saveMemoryProcedure,
  searchMemoryProcedure
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
  guardsFinancial: checkFinancialGuardProcedure,
  guardsReputation: checkReputationGuardProcedure,
  guardsLegal: checkLegalGuardProcedure,
  guardsRunAll: runAllGuardsProcedure,
  
  // Facebook Ads
  facebookAdsGenerateStrategy: generateFBStrategyProcedure,
  facebookAdsCreateCampaign: createFBCampaignProcedure,
  facebookAdsGenerateCreatives: generateFBCreativesProcedure,
  facebookAdsOptimize: optimizeFBCampaignProcedure,
  facebookAdsUpdateStatus: updateFBCampaignStatusProcedure,
  facebookAdsSyncMetrics: syncFBMetricsProcedure,
  
  // Google Ads
  googleAdsKeywordResearch: generateKeywordResearchProcedure,
  googleAdsGenerateStrategy: generateGoogleStrategyProcedure,
  googleAdsCreateCampaign: createGoogleCampaignProcedure,
  googleAdsGenerateRSA: generateRSAProcedure,
  googleAdsOptimize: optimizeGoogleCampaignProcedure,
  googleAdsSyncMetrics: syncGoogleMetricsProcedure,
  
  // CRM
  crmCreateLead: createLeadProcedure,
  crmScoreLead: scoreLeadProcedure,
  crmQualifyLead: qualifyLeadProcedure,
  crmGenerateFollowUp: generateFollowUpProcedure,
  crmScoreAll: scoreAllLeadsProcedure,
  crmQualifyHot: qualifyHotLeadsProcedure,
  crmGetLeads: getLeadsProcedure,
  crmGetStats: getLeadStatsProcedure,
  
  // Analytics
  analyticsDashboard,
  analyticsContentPerformance,
  analyticsCampaignROI,
  analyticsInsights,
  analyticsWeeklyReport,
  
  // Content
  contentGenerate: generateContentProcedure,
  contentGenerateVariations: generateContentVariationsProcedure,
  contentOptimizeSEO: optimizeContentForSEOProcedure,
  
  // Email
  emailCreateCampaign: createEmailCampaignProcedure,
  emailSendCampaign: sendEmailCampaignProcedure,
  emailSegmentAudience: segmentAudienceProcedure,
  emailRunABTest: runABTestProcedure,
  
  // Social
  socialGeneratePost: generateSocialPostProcedure,
  socialAnalyzeSentiment: analyzeSocialSentimentProcedure,
  socialGetBestPostingTimes: getBestPostingTimesProcedure,
  
  // Strategy
  strategyCoordinateAgents: coordinateMarketingAgentsProcedure,
  strategyOptimizeBudget: optimizeBudgetProcedure,
  strategyGenerateReport: generateStrategicReportProcedure,
  
  // Visual
  visualGenerate,
  visualVariants,
  visualOptimizePrompt,
  
  // Voice
  voiceGenerate,
  voiceScript,
  voiceComplete,
  
  // Competitor
  competitorAnalyze: analyzeCompetitorsProcedure,
  competitorMonitor: monitorCompetitorChangesProcedure,
  
  // Launch
  launchOrchestrate: orchestrateLaunchProcedure,
  launchStatus: getLaunchStatusProcedure,
  
  // Orchestration
  orchestrationRun: orchestrateProcedure,
  orchestrationMaster: orchestrateMasterProcedure,
  orchestrationProduct: orchestrateProductProcedure,
  orchestrationSaveMemory: saveMemoryProcedure,
  orchestrationSearchMemory: searchMemoryProcedure,
});
