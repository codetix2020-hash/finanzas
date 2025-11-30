import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  agentType: SortOrderSchema.optional(),
  decision: SortOrderSchema.optional(),
  reasoning: SortOrderSchema.optional(),
  executed: SortOrderSchema.optional(),
  executedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AgentDecisionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgentDecisionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionMaxOrderByAggregateInput>;
export const AgentDecisionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
