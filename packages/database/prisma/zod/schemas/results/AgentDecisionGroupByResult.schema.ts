import * as z from 'zod';
export const AgentDecisionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  organizationId: z.string(),
  agentType: z.string(),
  reasoning: z.string(),
  metrics: z.unknown(),
  executed: z.boolean(),
  executedAt: z.date(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    organizationId: z.number(),
    organization: z.number(),
    agentType: z.number(),
    decision: z.number(),
    reasoning: z.number(),
    metrics: z.number(),
    executed: z.number(),
    executedAt: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    agentType: z.string().nullable(),
    reasoning: z.string().nullable(),
    executedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    agentType: z.string().nullable(),
    reasoning: z.string().nullable(),
    executedAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));