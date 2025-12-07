import { z } from 'zod'
import { protectedProcedure, publicProcedure } from '../../../orpc/procedures'
import { handleNewProduct, sendFeatureRequest, processInbox } from '../webhook-handler'
import { prisma } from '@repo/database'

// Webhook para recibir nuevos productos (puede ser público con API key)
export const webhookProcedure = publicProcedure
  .route({ method: 'POST', path: '/autosaas/webhook' })
  .input(z.object({
    organizationId: z.string(),
    apiKey: z.string(),
    messageType: z.string(),
    payload: z.any()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    console.log('📥 Webhook Procedure: Handler iniciado')
    console.log('📥 Input recibido:', JSON.stringify(input, null, 2))
    
    try {
      // TODO: Validar API key
      console.log('📥 Guardando mensaje en inbox...')
      
      // Guardar en inbox
      const inboxMessage = await prisma.autoSaasInbox.create({
        data: {
          organizationId: input.organizationId,
          messageType: input.messageType,
          payload: input.payload,
          processed: false
        }
      })
      
      console.log('✅ Mensaje guardado en inbox:', inboxMessage.id)

      // Procesar inmediatamente si es nuevo producto
      if (input.messageType === 'new_product') {
        console.log('📥 Procesando mensaje de tipo new_product...')
        const result = await handleNewProduct(input.organizationId, input.payload)
        console.log('✅ Webhook Procedure: Procesamiento completado')
        return { processed: true, ...result, success: true }
      }

      console.log('✅ Webhook Procedure: Mensaje encolado')
      return { success: true, queued: true }
    } catch (error) {
      console.error('🔴 Webhook Procedure ERROR:', error)
      console.error('🔴 Error message:', error instanceof Error ? error.message : String(error))
      console.error('🔴 Error stack:', error instanceof Error ? error.stack : 'No stack')
      throw error
    }
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

