import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { EmailAgent } from "../services/email-agent";

export const createEmailCampaignProcedure = protectedProcedure
  .input(z.object({
    name: z.string(),
    segment: z.string(),
    goal: z.string(),
  }))
  .mutation(async ({ input }) => {
    const agent = new EmailAgent();
    const campaign = await agent.createCampaign(input);
    
    return {
      success: true,
      campaign,
    };
  });

export const sendEmailCampaignProcedure = protectedProcedure
  .input(z.object({
    campaign: z.any(),
    recipients: z.array(z.string()),
  }))
  .mutation(async ({ input }) => {
    const agent = new EmailAgent();
    const result = await agent.sendCampaign(input.campaign, input.recipients);
    
    return {
      success: true,
      ...result,
    };
  });

export const segmentAudienceProcedure = protectedProcedure
  .input(z.object({
    leads: z.array(z.object({
      email: z.string(),
      tags: z.array(z.string()),
      score: z.number(),
    })),
  }))
  .mutation(async ({ input }) => {
    const agent = new EmailAgent();
    const segments = await agent.segmentAudience(input.leads);
    
    return {
      success: true,
      segments,
    };
  });

export const runABTestProcedure = protectedProcedure
  .input(z.object({
    variantA: z.object({
      subject: z.string(),
      content: z.string(),
    }),
    variantB: z.object({
      subject: z.string(),
      content: z.string(),
    }),
    recipients: z.array(z.string()),
  }))
  .mutation(async ({ input }) => {
    const agent = new EmailAgent();
    const result = await agent.runABTest(input);
    
    return {
      success: true,
      ...result,
    };
  });

