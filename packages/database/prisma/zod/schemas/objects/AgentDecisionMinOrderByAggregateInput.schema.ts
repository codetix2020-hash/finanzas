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
export const AgentDecisionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgentDecisionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionMinOrderByAggregateInput>;
export const AgentDecisionMinOrderByAggregateInputObjectZodSchema = makeSchema();
