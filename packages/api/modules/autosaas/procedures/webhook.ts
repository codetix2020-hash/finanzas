import { z } from 'zod'
import { protectedProcedure, publicProcedure } from '../../../orpc/procedures'
import { handleNewProduct, sendFeatureRequest, processInbox } from '../webhook-handler'
import { prisma } from '@repo/database'

// Webhook para recibir nuevos productos (puede ser público con API key)
export const webhookProcedure = publicProcedure
  .route({ method: 'POST', path: '/webhook' })
  .input(z.object({
    organizationId: z.string(),
    apiKey: z.string(),
    messageType: z.string(),
    payload: z.any()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    // TODO: Validar API key
    
    // Guardar en inbox
    await prisma.autoSaasInbox.create({
      data: {
        organizationId: input.organizationId,
        messageType: input.messageType,
        payload: input.payload,
        processed: false
      }
    })

    // Procesar inmediatamente si es nuevo producto
    if (input.messageType === 'new_product') {
      const result = await handleNewProduct(input.organizationId, input.payload)
      return { success: true, processed: true, ...result }
    }

    return { success: true, queued: true }
  })

export const sendFeatureRequestProcedure = protectedProcedure
  .route({ method: 'POST', path: '/send-feature-request' })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string(),
    feature: z.string(),
    reasoning: z.string(),
    priority: z.enum(['high', 'medium', 'low'])
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    const result = await sendFeatureRequest(input)
    return result
  })

export const processInboxProcedure = protectedProcedure
  .route({ method: 'POST', path: '/process-inbox' })
  .input(z.object({
    organizationId: z.string()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    const result = await processInbox(input.organizationId)
    return { success: true, ...result }
  })

