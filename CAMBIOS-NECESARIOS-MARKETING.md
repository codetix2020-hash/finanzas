# Cambios Necesarios para Alinear Marketing con Finance

## Mapeo de Nombres (Export Actual → Nombre en Router → Nuevo Export)

### Analytics
- `getDashboardMetricsProcedure` → `analyticsDashboard` → `analyticsDashboard`
- `getContentPerformanceProcedure` → `analyticsContentPerformance` → `analyticsContentPerformance`
- `getCampaignROIProcedure` → `analyticsCampaignROI` → `analyticsCampaignROI`
- `generateInsightsProcedure` → `analyticsInsights` → `analyticsInsights`
- `generateWeeklyReportProcedure` → `analyticsWeeklyReport` → `analyticsWeeklyReport`

### Visual ✅ (YA HECHO)
- `generateImageProcedure` → `visualGenerate` → `visualGenerate` ✅
- `generateImageVariantsProcedure` → `visualVariants` → `visualVariants` ✅
- `generateOptimizedPromptProcedure` → `visualOptimizePrompt` → `visualOptimizePrompt` ✅

### Voice
- `generateVoiceoverProcedure` → `voiceGenerate` → `voiceGenerate`
- `generateVideoScriptProcedure` → `voiceScript` → `voiceScript`
- `generateScriptAndVoiceProcedure` → `voiceComplete` → `voiceComplete`

### Facebook Ads
- `generateFBStrategyProcedure` → `facebookAdsGenerateStrategy` → `facebookAdsGenerateStrategy`
- `createFBCampaignProcedure` → `facebookAdsCreateCampaign` → `facebookAdsCreateCampaign`
- `generateFBCreativesProcedure` → `facebookAdsGenerateCreatives` → `facebookAdsGenerateCreatives`
- `optimizeFBCampaignProcedure` → `facebookAdsOptimize` → `facebookAdsOptimize`
- `updateFBCampaignStatusProcedure` → `facebookAdsUpdateStatus` → `facebookAdsUpdateStatus`
- `syncFBMetricsProcedure` → `facebookAdsSyncMetrics` → `facebookAdsSyncMetrics`

### Google Ads
- `generateKeywordResearchProcedure` → `googleAdsKeywordResearch` → `googleAdsKeywordResearch`
- `generateGoogleStrategyProcedure` → `googleAdsGenerateStrategy` → `googleAdsGenerateStrategy`
- `createGoogleCampaignProcedure` → `googleAdsCreateCampaign` → `googleAdsCreateCampaign`
- `generateRSAProcedure` → `googleAdsGenerateRSA` → `googleAdsGenerateRSA`
- `optimizeGoogleCampaignProcedure` → `googleAdsOptimize` → `googleAdsOptimize`
- `syncGoogleMetricsProcedure` → `googleAdsSyncMetrics` → `googleAdsSyncMetrics`

### CRM
- `createLeadProcedure` → `crmCreateLead` → `crmCreateLead`
- `scoreLeadProcedure` → `crmScoreLead` → `crmScoreLead`
- `qualifyLeadProcedure` → `crmQualifyLead` → `crmQualifyLead`
- `generateFollowUpProcedure` → `crmGenerateFollowUp` → `crmGenerateFollowUp`
- `scoreAllLeadsProcedure` → `crmScoreAll` → `crmScoreAll`
- `qualifyHotLeadsProcedure` → `crmQualifyHot` → `crmQualifyHot`
- `getLeadsProcedure` → `crmGetLeads` → `crmGetLeads`
- `getLeadStatsProcedure` → `crmGetStats` → `crmGetStats`

### Guards
- `checkFinancialGuardProcedure` → `guardsFinancial` → `guardsFinancial`
- `checkReputationGuardProcedure` → `guardsReputation` → `guardsReputation`
- `checkLegalGuardProcedure` → `guardsLegal` → `guardsLegal`
- `runAllGuardsProcedure` → `guardsRunAll` → `guardsRunAll`

### Content
- `generateContentProcedure` → `contentGenerate` → `contentGenerate`
- `generateContentVariationsProcedure` → `contentGenerateVariations` → `contentGenerateVariations`
- `optimizeContentForSEOProcedure` → `contentOptimizeSEO` → `contentOptimizeSEO`

### Email
- `createEmailCampaignProcedure` → `emailCreateCampaign` → `emailCreateCampaign`
- `sendEmailCampaignProcedure` → `emailSendCampaign` → `emailSendCampaign`
- `segmentAudienceProcedure` → `emailSegmentAudience` → `emailSegmentAudience`
- `runABTestProcedure` → `emailRunABTest` → `emailRunABTest`

### Social
- `generateSocialPostProcedure` → `socialGeneratePost` → `socialGeneratePost`
- `analyzeSocialSentimentProcedure` → `socialAnalyzeSentiment` → `socialAnalyzeSentiment`
- `getBestPostingTimesProcedure` → `socialGetBestPostingTimes` → `socialGetBestPostingTimes`

### Strategy
- `coordinateMarketingAgentsProcedure` → `strategyCoordinateAgents` → `strategyCoordinateAgents`
- `optimizeBudgetProcedure` → `strategyOptimizeBudget` → `strategyOptimizeBudget` (ya coincide)
- `generateStrategicReportProcedure` → `strategyGenerateReport` → `strategyGenerateReport`

### Competitor
- `analyzeCompetitorsProcedure` → `competitorAnalyze` → `competitorAnalyze`
- `monitorCompetitorChangesProcedure` → `competitorMonitor` → `competitorMonitor`

### Launch
- `orchestrateLaunchProcedure` → `launchOrchestrate` → `launchOrchestrate`
- `getLaunchStatusProcedure` → `launchStatus` → `launchStatus`

### Orchestration
- `orchestrateProcedure` → `orchestrationRun` → `orchestrationRun`
- `orchestrateMasterProcedure` → `orchestrationMaster` → `orchestrationMaster`
- `orchestrateProductProcedure` → `orchestrationProduct` → `orchestrationProduct`
- `saveMemoryProcedure` → `orchestrationSaveMemory` → `orchestrationSaveMemory`
- `searchMemoryProcedure` → `orchestrationSearchMemory` → `orchestrationSearchMemory`

