import * as z from 'zod';
// prettier-ignore
export const OrganizationModelSchema = z.object({
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
    agentDecisions: z.array(z.unknown())
}).strict();

export type OrganizationPureType = z.infer<typeof OrganizationModelSchema>;
