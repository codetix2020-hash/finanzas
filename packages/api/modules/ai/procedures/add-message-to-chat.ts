import { ORPCError, streamToEventIterator } from "@orpc/client";
import {
	convertToModelMessages,
	streamText,
	textModel,
	type UIMessage,
} from "@repo/ai";
import {
	generateRequestId,
	trackAIUsageFromFinish,
} from "@repo/ai/lib/cost-tracker";
import { getAiChatById, updateAiChat } from "@repo/database";
import z from "zod";
import { protectedProcedure } from "../../../orpc/procedures";
import { verifyOrganizationMembership } from "../../organizations/lib/membership";

export const addMessageToChat = protectedProcedure
	.route({
		method: "POST",
		path: "/ai/chats/{chatId}/messages",
		tags: ["AI"],
		summary: "Add message to chat",
		description:
			"Send all messages of the chat to the AI model to get a response",
	})
	.input(
		z.object({
			chatId: z.string(),
			messages: z.array(z.any() as z.ZodType<UIMessage>),
		}),
	)
	.handler(async ({ input, context }) => {
		const { chatId, messages } = input;
		const user = context.user;

		const chat = await getAiChatById(chatId);

		if (!chat) {
			throw new ORPCError("NOT_FOUND");
		}

		if (chat.organizationId) {
			const membership = await verifyOrganizationMembership(
				chat.organizationId,
				user.id,
			);

			if (!membership) {
				throw new ORPCError("FORBIDDEN");
			}
		} else if (chat.userId !== context.user.id) {
			throw new ORPCError("FORBIDDEN");
		}

		// Generar requestId para tracking
		const requestId = generateRequestId();
		const modelId = "gpt-4o-mini"; // Modelo definido en packages/ai/index.ts

		const response = streamText({
			model: textModel,
			messages: convertToModelMessages(
				messages as unknown as UIMessage[],
			),
			async onFinish({ text, usage }) {
				// Trackear costo de IA si hay organizationId
				if (chat.organizationId && usage) {
					// Mapear usage de Vercel AI SDK al formato esperado
					const usageData = {
						promptTokens: (usage as any).promptTokens ?? 0,
						completionTokens: (usage as any).completionTokens ?? 0,
					};

					await trackAIUsageFromFinish({
						organizationId: chat.organizationId,
						modelId,
						usage: usageData,
						endpoint: `/api/rpc/ai/chats/${chatId}/messages`,
						requestId,
					}).catch((error) => {
						// Log error pero no fallar la request
						console.error("Failed to track AI cost:", error);
					});
				}

				// Guardar mensaje del asistente
				await updateAiChat({
					id: chatId,
					messages: [
						...messages,
						{
							role: "assistant",
							parts: [{ type: "text", text }],
						},
					],
				});
			},
		});

		return streamToEventIterator(response.toUIMessageStream());
	});
