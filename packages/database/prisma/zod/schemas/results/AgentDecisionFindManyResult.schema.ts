import * as z from 'zod';
export const AgentDecisionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  agentType: z.string(),
  decision: z.unknown(),
  reasoning: z.string(),
  metrics: z.unknown(),
  executed: z.boolean(),
  executedAt: z.date().optional(),
  createdAt: z.date()
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