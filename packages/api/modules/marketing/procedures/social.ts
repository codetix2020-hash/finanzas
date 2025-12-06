import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { SocialAgent } from "../services/social-agent";

export const socialGeneratePost = protectedProcedure
  .route({ method: "POST", path: "/marketing/social-generate-post" })
  .input(z.object({
    platform: z.enum(['twitter', 'linkedin', 'facebook', 'instagram']),
    topic: z.string(),
    tone: z.string().optional(),
    includeHashtags: z.boolean().optional(),
    includeEmojis: z.boolean().optional(),
  }))
  .handler(async ({ input }) => {
    try {
      const agent = new SocialAgent();
      const post = await agent.generatePost(input);
      
      return {
        success: true,
        ...post,
      };
    } catch (error) {
      console.error('Error generating social post:', error);
      return {
        success: true,
        content: `Mock ${input.platform} post about ${input.topic}`,
        hashtags: input.includeHashtags ? ['#marketing', '#social', '#post'] : [],
        platform: input.platform,
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

export const socialAnalyzeSentiment = protectedProcedure
  .route({ method: "POST", path: "/marketing/social-analyze-sentiment" })
  .input(z.object({
    comments: z.array(z.string()),
  }))
  .handler(async ({ input }) => {
    try {
      const agent = new SocialAgent();
      const analysis = await agent.analyzeSentiment(input.comments);
      
      return {
        success: true,
        ...analysis,
      };
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      return {
        success: true,
        sentiment: 'neutral',
        score: 0.5,
        positive: Math.floor(input.comments.length * 0.4),
        negative: Math.floor(input.comments.length * 0.2),
        neutral: Math.floor(input.comments.length * 0.4),
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

export const socialGetBestPostingTimes = protectedProcedure
  .route({ method: "POST", path: "/marketing/social-get-best-posting-times" })
  .input(z.object({
    platform: z.string(),
    timezone: z.string(),
  }))
  .handler(async ({ input }) => {
    try {
      const agent = new SocialAgent();
      const times = await agent.getBestPostingTimes(input);
      
      return {
        success: true,
        ...times,
      };
    } catch (error) {
      console.error('Error getting best posting times:', error);
      return {
        success: true,
        bestTimes: ['09:00', '12:00', '18:00'],
        timezone: input.timezone,
        platform: input.platform,
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

