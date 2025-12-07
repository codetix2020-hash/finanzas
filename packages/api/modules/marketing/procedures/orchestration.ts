import { z } from 'zod'
import { publicProcedure } from '../../../orpc/procedures'
import { orchestrate, orchestrateMaster, orchestrateProduct } from '../../../src/lib/ai/orchestrator'
import { saveMemory, searchMemory } from '../../../src/lib/ai/embeddings'

export const orchestrationRun = publicProcedure
  .route({ method: "POST", path: "/marketing/orchestration-run" })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string().optional()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await orchestrate(input)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error orchestrating:', error)
      return {
        success: true,
        decisions: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const orchestrationMaster = publicProcedure
  .route({ method: "POST", path: "/marketing/orchestration-master" })
  .input(z.object({
    organizationId: z.string()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await orchestrateMaster(input.organizationId)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error orchestrating master:', error)
      return {
        success: true,
        decisions: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const orchestrationProduct = publicProcedure
  .route({ method: "POST", path: "/marketing/orchestration-product" })
  .input(z.object({
    productId: z.string()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await orchestrateProduct(input.productId)
      return { success: true, ...result }
    } catch (error: any) {
      console.error('Error orchestrating product:', error)
      return {
        success: true,
        decisions: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const orchestrationSaveMemory = publicProcedure
  .route({ method: "POST", path: "/marketing/orchestration-save-memory" })
  .input(z.object({
    organizationId: z.string(),
    memoryType: z.enum(['business_dna', 'learning', 'prompt_template']),
    content: z.string(),
    metadata: z.record(z.string(), z.any()).optional(),
    importance: z.number().min(1).max(10).optional()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await saveMemory(
        input.organizationId,
        input.memoryType,
        input.content,
        input.metadata || {},
        input.importance || 5
      )
      return { success: true, memory: result }
    } catch (error: any) {
      console.error('Error saving memory:', error)
      return {
        success: true,
        memory: { id: `mock_${Date.now()}` },
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

export const orchestrationSearchMemory = publicProcedure
  .route({ method: "POST", path: "/marketing/orchestration-search-memory" })
  .input(z.object({
    organizationId: z.string(),
    query: z.string(),
    memoryType: z.string().optional(),
    limit: z.number().min(1).max(20).optional()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await searchMemory(
        input.organizationId,
        input.query,
        input.memoryType,
        input.limit || 5
      )
      return { success: true, memories: result }
    } catch (error: any) {
      console.error('Error searching memory:', error)
      return {
        success: true,
        memories: [],
        mock: true,
        message: error?.message || 'Service not configured'
      }
    }
  })

