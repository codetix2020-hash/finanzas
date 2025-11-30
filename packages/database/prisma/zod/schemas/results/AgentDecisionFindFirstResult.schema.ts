import * as z from 'zod';
export const AgentDecisionFindFirstResultSchema = z.nullable(z.object({
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
}));