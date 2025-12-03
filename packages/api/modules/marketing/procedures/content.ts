import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { ContentAgent } from "../services/content-agent";

const generateContentSchema = z.object({
  type: z.enum(['blog_post', 'social_post', 'ad_copy', 'email', 'landing_page']),
  topic: z.string(),
  tone: z.enum(['professional', 'casual', 'friendly', 'urgent']).optional(),
  length: z.enum(['short', 'medium', 'long']).optional(),
  keywords: z.array(z.string()).optional(),
  targetAudience: z.string().optional(),
});

export const generateContentProcedure = protectedProcedure
  .input(generateContentSchema)
  .mutation(async ({ input }) => {
    const agent = new ContentAgent();
    const content = await agent.generateContent(input);
    
    return {
      success: true,
      content,
      generatedAt: new Date().toISOString(),
    };
  });

export const generateContentVariationsProcedure = protectedProcedure
  .input(generateContentSchema.extend({
    count: z.number().min(1).max(5).default(3),
  }))
  .mutation(async ({ input }) => {
    const agent = new ContentAgent();
    const { count, ...request } = input;
    const variations = await agent.generateVariations(request, count);
    
    return {
      success: true,
      variations,
      count: variations.length,
    };
  });

export const optimizeContentForSEOProcedure = protectedProcedure
  .input(z.object({
    content: z.string(),
    keywords: z.array(z.string()),
  }))
  .mutation(async ({ input }) => {
    const agent = new ContentAgent();
    const optimized = await agent.optimizeForSEO(input.content, input.keywords);
    
    return {
      success: true,
      ...optimized,
    };
  });

