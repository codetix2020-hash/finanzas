import * as z from 'zod';
// prettier-ignore
export const OrganizationResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string().nullable(),
    logo: z.string().nullable(),
    createdAt: z.date(),
    metadata: z.string().nullable(),
    paymentsCustomerId: z.string().nullable(),
    members: z.array(z.unknown()),
    invitations: z.array(z.unknown()),
    purchases: z.array(z.unknown()),
    aiChats: z.array(z.unknown()),
    financialTransactions: z.array(z.unknown()),
    saasMetrics: z.array(z.unknown()),
    costTrackings: z.array(z.unknown()),
    agentDecisions: z.array(z.unknown()),
    saasProducts: z.array(z.unknown()),
    marketingAdCampaigns: z.array(z.unknown()),
    marketingContent: z.array(z.unknown()),
    marketingDecisions: z.array(z.unknown()),
    marketingGuards: z.array(z.unknown()),
    marketingLeads: z.array(z.unknown())
}).strict();

export type OrganizationResultType = z.infer<typeof OrganizationResultSchema>;
