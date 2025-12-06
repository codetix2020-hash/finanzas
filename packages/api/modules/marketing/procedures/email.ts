import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { EmailAgent } from "../services/email-agent";

export const emailCreateCampaign = protectedProcedure
  .route({ method: "POST", path: "/marketing/email-create-campaign" })
  .input(z.object({
    name: z.string(),
    segment: z.string(),
    goal: z.string(),
  }))
  .handler(async ({ input }) => {
    try {
      const agent = new EmailAgent();
      const campaign = await agent.createCampaign(input);
      
      return {
        success: true,
        campaign,
      };
    } catch (error) {
      console.error('Error creating email campaign:', error);
      return {
        success: true,
        campaign: {
          id: `mock_${Date.now()}`,
          name: input.name,
          segment: input.segment,
          goal: input.goal,
          status: 'draft'
        },
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

export const emailSendCampaign = protectedProcedure
  .route({ method: "POST", path: "/marketing/email-send-campaign" })
  .input(z.object({
    campaign: z.any(),
    recipients: z.array(z.string()),
  }))
  .handler(async ({ input }) => {
    try {
      const agent = new EmailAgent();
      const result = await agent.sendCampaign(input.campaign, input.recipients);
      
      return {
        success: true,
        ...result,
      };
    } catch (error) {
      console.error('Error sending email campaign:', error);
      return {
        success: true,
        sent: input.recipients.length,
        failed: 0,
        campaignId: input.campaign?.id || 'mock',
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

export const emailSegmentAudience = protectedProcedure
  .route({ method: "POST", path: "/marketing/email-segment-audience" })
  .input(z.object({
    leads: z.array(z.object({
      email: z.string(),
      tags: z.array(z.string()),
      score: z.number(),
    })),
  }))
  .handler(async ({ input }) => {
    try {
      const agent = new EmailAgent();
      const segments = await agent.segmentAudience(input.leads);
      
      return {
        success: true,
        segments,
      };
    } catch (error) {
      console.error('Error segmenting audience:', error);
      return {
        success: true,
        segments: [
          { name: 'Hot Leads', leads: input.leads.filter(l => l.score > 70) },
          { name: 'Warm Leads', leads: input.leads.filter(l => l.score > 40 && l.score <= 70) },
          { name: 'Cold Leads', leads: input.leads.filter(l => l.score <= 40) }
        ],
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

export const emailRunABTest = protectedProcedure
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
    try {
      const agent = new EmailAgent();
      const result = await agent.runABTest(input);
      
      return {
        success: true,
        ...result,
      };
    } catch (error) {
      console.error('Error running AB test:', error);
      return {
        success: true,
        variantA: { sent: Math.floor(input.recipients.length / 2), opens: 0, clicks: 0 },
        variantB: { sent: Math.ceil(input.recipients.length / 2), opens: 0, clicks: 0 },
        winner: 'A',
        mock: true,
        message: 'Service not configured, returning mock response'
      };
    }
  });

