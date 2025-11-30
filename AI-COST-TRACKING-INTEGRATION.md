# Integración de Tracking de Costos de IA

Este documento explica cómo se integra el tracking automático de costos de llamadas a APIs de IA.

---

## ARCHIVO CREADO

### `/packages/ai/lib/cost-tracker.ts`

Este archivo contiene:

1. **`mapModelToProvider()`** - Mapea modelos de Vercel AI SDK a enums de Prisma
2. **`calculateCost()`** - Calcula el costo basado en tokens y pricing
3. **`trackAICall()`** - Registra en `CostTracking` y `FinancialTransaction`
4. **`generateRequestId()`** - Genera IDs únicos para requests
5. **`trackAIUsageFromFinish()`** - Helper para usar desde `onFinish` callback

---

## LUGARES DONDE SE HACEN LLAMADAS A IA

### 1. Archivo principal: `/packages/api/modules/ai/procedures/add-message-to-chat.ts`

**Ruta completa del archivo:**
```
packages/api/modules/ai/procedures/add-message-to-chat.ts
```

**Cómo se llama actualmente:**
```typescript
const response = streamText({
  model: textModel,
  messages: convertToModelMessages(messages),
  async onFinish({ text }) {
    await updateAiChat({
      id: chatId,
      messages: [...messages, { role: "assistant", parts: [{ type: "text", text }] }],
    });
  },
});
```

**Cómo obtener organizationId:**
- El `organizationId` está disponible en `chat.organizationId` (línea 38)
- Se obtiene de: `const chat = await getAiChatById(chatId);` (línea 32)
- Puede ser `null` para chats de usuario individual

---

## EJEMPLO DE INTEGRACIÓN

### Código antes (sin tracking):

```typescript
const response = streamText({
  model: textModel,
  messages: convertToModelMessages(messages as unknown as UIMessage[]),
  async onFinish({ text }) {
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
```

### Código después (con tracking):

```typescript
import { generateRequestId, trackAIUsageFromFinish } from "@repo/ai/lib/cost-tracker";

const requestId = generateRequestId();
// El modelo actual es "gpt-4o-mini" definido en packages/ai/index.ts
const modelId = "gpt-4o-mini"; // o textModel.modelId si está disponible

const response = streamText({
  model: textModel,
  messages: convertToModelMessages(messages as unknown as UIMessage[]),
  async onFinish({ text, usage }) {
    // Trackear costo si hay organizationId
    if (chat.organizationId) {
      await trackAIUsageFromFinish({
        organizationId: chat.organizationId,
        modelId,
        usage,
        endpoint: "/api/rpc/ai/chats/{chatId}/messages",
        requestId,
      });
    }

    // Lógica original
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
```

---

## MODIFICACIÓN COMPLETA DEL ARCHIVO

Aquí está el código completo modificado que debes aplicar:

```typescript
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
		// El modelo actual es "gpt-4o-mini" (definido en packages/ai/index.ts)
		const modelId = "gpt-4o-mini";

		const response = streamText({
			model: textModel,
			messages: convertToModelMessages(
				messages as unknown as UIMessage[],
			),
			async onFinish({ text, usage }) {
				// Trackear costo de IA si hay organizationId
				if (chat.organizationId) {
					await trackAIUsageFromFinish({
						organizationId: chat.organizationId,
						modelId,
						usage,
						endpoint: "/api/rpc/ai/chats/{chatId}/messages",
						requestId,
					});
				}

				// Lógica original de guardar mensaje
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
```

**Cambios específicos:**
1. **Línea 2-7**: Añadir imports de cost-tracker
2. **Línea 51-52**: Generar requestId y definir modelId
3. **Línea 56**: Modificar `onFinish` para recibir `usage`
4. **Línea 58-66**: Añadir tracking antes de guardar el mensaje

---

## NOTAS IMPORTANTES

1. **OrganizationId puede ser null**: Los chats pueden ser de usuario individual (sin organizationId). En ese caso, no se trackea el costo.

2. **El callback onFinish recibe usage**: Vercel AI SDK proporciona `usage` con `promptTokens` y `completionTokens` en el callback `onFinish`.

3. **No interrumpe el flujo**: Si el tracking falla, no interrumpe la ejecución normal (se loguea el error).

4. **Endpoint**: El endpoint debe identificarse para debugging. Usa la ruta del procedimiento oRPC.

5. **ModelId**: El modelo actual es "gpt-4o-mini". Si cambias de modelo, actualiza el `modelId` o hazlo dinámico.

---

## MODELOS SOPORTADOS

El sistema detecta automáticamente estos modelos:

- **OpenAI**: `gpt-4`, `gpt-4o`, `gpt-4o-mini`, `gpt-3.5-turbo`
- **Claude**: `claude-opus`, `claude-sonnet`, `claude-haiku`, `claude-3-opus`, `claude-3-5-sonnet`, `claude-3-haiku`

---

## PRÓXIMOS PASOS

1. ✅ Archivo cost-tracker.ts creado
2. ⏭️ Integrar el tracking en `add-message-to-chat.ts` (aplicar los cambios mostrados arriba)
3. ⏭️ Si agregas más modelos o endpoints de IA, usa `trackAIUsageFromFinish()` en sus callbacks `onFinish`
4. ⏭️ Verificar que los costos se registren correctamente en la base de datos

