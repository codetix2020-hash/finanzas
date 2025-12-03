import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
// import { RealtimeEvents } from "../../realtime/realtime-events"; // COMENTADO: WebSockets no funcionan en Railway

const inputSchema = z.object({
	organizationId: z.string(),
	duration: z.number().optional(), // minutes
});

export const startRealtimeSimulation = protectedProcedure
	.route({ method: "POST", path: "/start-realtime-simulation" })
	.input(inputSchema)
	.output(z.any())
	.handler(async ({ input }) => {
		// WebSockets deshabilitados en producción (Railway no soporta socket.io)
		return {
			success: false,
			message: 'WebSockets no disponibles en producción',
			organizationId: input.organizationId,
		};

		// CÓDIGO COMENTADO - WebSockets no funcionan en Railway
		// // Start metrics simulation
		// const cleanup = RealtimeEvents.startMetricsSimulation(
		// 	input.organizationId,
		// );
		//
		// // Stop after duration (default 30 minutes)
		// const duration = (input.duration || 30) * 60 * 1000;
		// setTimeout(cleanup, duration);
		//
		// return {
		// 	success: true,
		// 	message: `Real-time simulation started for ${input.duration || 30} minutes`,
		// 	organizationId: input.organizationId,
		// };
	});

