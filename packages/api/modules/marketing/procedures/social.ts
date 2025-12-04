import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { SocialAgent } from "../services/social-agent";

export const generateSocialPostProcedure = protectedProcedure
  .input(z.object({
    platform: z.enum(['twitter', 'linkedin', 'facebook', 'instagram']),
    topic: z.string(),
    tone: z.string().optional(),
    includeHashtags: z.boolean().optional(),
    includeEmojis: z.boolean().optional(),
  }))
  .handler(async ({ input }) => {
    const agent = new SocialAgent();
    const post = await agent.generatePost(input);
    
    return {
      success: true,
      ...post,
    };
  });

export const analyzeSocialSentimentProcedure = protectedProcedure
  .input(z.object({
    comments: z.array(z.string()),
  }))
  .handler(async ({ input }) => {
    const agent = new SocialAgent();
    const analysis = await agent.analyzeSentiment(input.comments);
    
    return {
      success: true,
      ...analysis,
    };
  });

export const getBestPostingTimesProcedure = protectedProcedure
  .input(z.object({
    platform: z.string(),
    timezone: z.string(),
  }))
  .handler(async ({ input }) => {
    const agent = new SocialAgent();
    const times = await agent.getBestPostingTimes(input);
    
    return {
      success: true,
      ...times,
    };
  });

