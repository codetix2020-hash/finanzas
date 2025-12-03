import { publicProcedure } from "../../orpc/procedures";
import { trackAttribution } from "./procedures/track-attribution";
import { analyzeBudget } from "./procedures/analyze-budget";
import { getIntegrationDashboard } from "./procedures/get-integration-dashboard";
import { startRealtimeSimulation } from "./procedures/start-realtime-simulation";
import {
	testSlack,
	testResend,
	testStripe,
} from "./procedures/test-apis";

export const integrationRouter = publicProcedure.router({
	trackAttribution: trackAttribution,
	analyzeBudget: analyzeBudget,
	getIntegrationDashboard: getIntegrationDashboard,
	startRealtimeSimulation: startRealtimeSimulation,
	testSlack: testSlack,
	testResend: testResend,
	testStripe: testStripe,
});

