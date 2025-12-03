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

export const marketingRouter = publicProcedure.router({
  guards: {
    financial: checkFinancialGuardProcedure,
    reputation: checkReputationGuardProcedure,
    legal: checkLegalGuardProcedure,
    runAll: runAllGuardsProcedure
  },
  facebookAds: {
    generateStrategy: generateFBStrategyProcedure,
    createCampaign: createFBCampaignProcedure,
    generateCreatives: generateFBCreativesProcedure,
    optimize: optimizeFBCampaignProcedure,
    updateStatus: updateFBCampaignStatusProcedure,
    syncMetrics: syncFBMetricsProcedure
  }
});

