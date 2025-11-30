import * as z from 'zod';
export const OrganizationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    slug: z.number(),
    logo: z.number(),
    createdAt: z.number(),
    metadata: z.number(),
    paymentsCustomerId: z.number(),
    members: z.number(),
    invitations: z.number(),
    purchases: z.number(),
    aiChats: z.number(),
    financialTransactions: z.number(),
    saasMetrics: z.number(),
    costTrackings: z.number(),
    agentDecisions: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    logo: z.string().nullable(),
    createdAt: z.date().nullable(),
    metadata: z.string().nullable(),
    paymentsCustomerId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    slug: z.string().nullable(),
    logo: z.string().nullable(),
    createdAt: z.date().nullable(),
    metadata: z.string().nullable(),
    paymentsCustomerId: z.string().nullable()
  }).nullable().optional()});