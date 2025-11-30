import * as z from 'zod';
export const OrganizationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().optional(),
  logo: z.string().optional(),
  createdAt: z.date(),
  metadata: z.string().optional(),
  paymentsCustomerId: z.string().optional(),
  members: z.array(z.unknown()),
  invitations: z.array(z.unknown()),
  purchases: z.array(z.unknown()),
  aiChats: z.array(z.unknown()),
  financialTransactions: z.array(z.unknown()),
  saasMetrics: z.array(z.unknown()),
  costTrackings: z.array(z.unknown()),
  agentDecisions: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});