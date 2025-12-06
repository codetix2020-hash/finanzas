import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { EmailAgent } from "../services/email-agent";

export const createEmailCampaignProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/email-create-campaign" })
  .input(z.object({
    name: z.string(),
    segment: z.string(),
    goal: z.string(),
  }))
  .handler(async ({ input }) => {
    const agent = new EmailAgent();
    const campaign = await agent.createCampaign(input);
    
    return {
      success: true,
      campaign,
    };
  });

export const sendEmailCampaignProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/email-send-campaign" })
  .input(z.object({
    campaign: z.any(),
    recipients: z.array(z.string()),
  }))
  .handler(async ({ input }) => {
    const agent = new EmailAgent();
    const result = await agent.sendCampaign(input.campaign, input.recipients);
    
    return {
      success: true,
      ...result,
    };
  });

export const segmentAudienceProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/email-segment-audience" })
  .input(z.object({
    leads: z.array(z.object({
      email: z.string(),
      tags: z.array(z.string()),
      score: z.number(),
    })),
  }))
  .handler(async ({ input }) => {
    const agent = new EmailAgent();
    const segments = await agent.segmentAudience(input.leads);
    
    return {
      success: true,
      segments,
    };
  });

export const runABTestProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/email-run-ab-test" })
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
  .handler(async ({ input }) => {
    const agent = new EmailAgent();
    const result = await agent.runABTest(input);
    
    return {
      success: true,
      ...result,
    };
  });

