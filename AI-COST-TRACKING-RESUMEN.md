# Resumen: Sistema de Tracking de Costos de IA

---

## ✅ TAREA 1: ARCHIVO CREADO

### `/packages/ai/lib/cost-tracker.ts`

El archivo está completo y listo para usar. Contiene:

- ✅ Pricing de todos los modelos (Claude y OpenAI)
- ✅ Función `calculateCost()` para calcular costos
- ✅ Función `mapModelToProvider()` para mapear modelos a enums
- ✅ Función `trackAICall()` que registra en CostTracking y FinancialTransaction
- ✅ Función `generateRequestId()` para generar IDs únicos
- ✅ Función `trackAIUsageFromFinish()` helper para usar desde callbacks

**Archivo completo:** Ver `packages/ai/lib/cost-tracker.ts`

---

## ✅ TAREA 2: DÓNDE SE HACEN LLAMADAS A IA

### 📍 Archivo Principal

**Ruta:** `packages/api/modules/ai/procedures/add-message-to-chat.ts`

**Líneas relevantes:**
- Línea 32: `const chat = await getAiChatById(chatId);`
- Línea 38: `chat.organizationId` (puede ser `null`)
- Líneas 51-68: Llamada a `streamText()` con el callback `onFinish`

**Cómo se llama actualmente:**
```typescript
const response = streamText({
  model: textModel,
  messages: convertToModelMessages(messages),
  async onFinish({ text }) {
    await updateAiChat({ id: chatId, messages: [...] });
  },
});
```

**OrganizationId disponible en:**
- `chat.organizationId` (línea 38)
- Puede ser `null` para chats de usuario individual
- Ya está validado antes de la llamada a `streamText()`

---

## ✅ TAREA 3: EJEMPLO DE INTEGRACIÓN

### Modificación del archivo `add-message-to-chat.ts`

**IMPORTANTE:** Solo hay **UN** archivo donde se hacen llamadas a IA actualmente.

#### Cambios necesarios:

**1. Añadir imports (después de la línea 7):**
```typescript
import {
	generateRequestId,
	trackAIUsageFromFinish,
} from "@repo/ai/lib/cost-tracker";
```

**2. Generar requestId y obtener modelId (antes de streamText, línea 51):**
```typescript
const requestId = generateRequestId();
// El modelo actual es "gpt-4o-mini" definido en packages/ai/index.ts
const modelId = "gpt-4o-mini";
```

**3. Modificar el callback onFinish (línea 56):**
```typescript
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
```

---

## 📋 CÓDIGO COMPLETO MODIFICADO

Aquí está el archivo completo con todos los cambios aplicados:

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
		// El modelo actual es "gpt-4o-mini" definido en packages/ai/index.ts
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

---

## 📝 LISTA DE ARCHIVOS DONDE SE LLAMA A IA

### Solo 1 archivo encontrado:

1. **`packages/api/modules/ai/procedures/add-message-to-chat.ts`**
   - Función: `addMessageToChat`
   - Modelo usado: `textModel` (gpt-4o-mini)
   - OrganizationId: `chat.organizationId` (línea 38)

---

## 🎯 RESUMEN DE FUNCIONAMIENTO

1. **Cuando se hace una llamada a IA:**
   - Se genera un `requestId` único
   - Se ejecuta `streamText()` con el modelo
   - En el callback `onFinish`, si hay `usage` y `organizationId`, se trackea

2. **Qué se registra:**
   - **CostTracking**: Detalles de la llamada (tokens, costo estimado, endpoint)
   - **FinancialTransaction**: Costo como transacción financiera (COST_API_CLAUDE o COST_API_OPENAI)

3. **Si no hay organizationId:**
   - No se trackea el costo (chats de usuario individual)

4. **Si no hay usage:**
   - No se trackea el costo (si la llamada falla o no proporciona usage)

---

## ✅ ESTADO ACTUAL

- ✅ Archivo `cost-tracker.ts` creado y exportado
- ⏭️ Pendiente: Integrar en `add-message-to-chat.ts` (aplicar cambios mostrados arriba)
- ✅ Documentación completa en `AI-COST-TRACKING-INTEGRATION.md`

---

## 🔍 NOTAS TÉCNICAS

- El modelo actual es **"gpt-4o-mini"** (OpenAI)
- Vercel AI SDK proporciona `usage` con `promptTokens` y `completionTokens` en `onFinish`
- El tracking no interrumpe el flujo si falla (solo loguea el error)
- Solo se trackean llamadas de organizaciones (no usuarios individuales)

