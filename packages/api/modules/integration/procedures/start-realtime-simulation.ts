import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { RealtimeEvents } from "../../realtime/realtime-events";

const inputSchema = z.object({
	organizationId: z.string(),
	duration: z.number().optional(), // minutes
});

export const startRealtimeSimulation = protectedProcedure
	.route({ method: "POST", path: "/start-realtime-simulation" })
	.input(inputSchema)
	.output(z.any())
	.handler(async ({ input }) => {
		// Start metrics simulation
		const cleanup = RealtimeEvents.startMetricsSimulation(
			input.organizationId,
		);

		// Stop after duration (default 30 minutes)
		const duration = (input.duration || 30) * 60 * 1000;
		setTimeout(cleanup, duration);

		return {
			success: true,
			message: `Real-time simulation started for ${input.duration || 30} minutes`,
			organizationId: input.organizationId,
		};
	});

