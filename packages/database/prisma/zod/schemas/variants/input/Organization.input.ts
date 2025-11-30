import * as z from 'zod';
// prettier-ignore
export const OrganizationInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string().optional().nullable(),
    logo: z.string().optional().nullable(),
    createdAt: z.date(),
    metadata: z.string().optional().nullable(),
    paymentsCustomerId: z.string().optional().nullable(),
    members: z.array(z.unknown()),
    invitations: z.array(z.unknown()),
    purchases: z.array(z.unknown()),
    aiChats: z.array(z.unknown()),
    financialTransactions: z.array(z.unknown()),
    saasMetrics: z.array(z.unknown()),
    costTrackings: z.array(z.unknown()),
    agentDecisions: z.array(z.unknown())
}).strict();

export type OrganizationInputType = z.infer<typeof OrganizationInputSchema>;
