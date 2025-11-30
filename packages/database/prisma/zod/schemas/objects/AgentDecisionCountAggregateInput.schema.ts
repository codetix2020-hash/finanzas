import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  agentType: z.literal(true).optional(),
  decision: z.literal(true).optional(),
  reasoning: z.literal(true).optional(),
  metrics: z.literal(true).optional(),
  executed: z.literal(true).optional(),
  executedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AgentDecisionCountAggregateInputObjectSchema: z.ZodType<Prisma.AgentDecisionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionCountAggregateInputType>;
export const AgentDecisionCountAggregateInputObjectZodSchema = makeSchema();
