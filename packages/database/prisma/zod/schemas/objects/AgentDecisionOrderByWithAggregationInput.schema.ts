import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgentDecisionCountOrderByAggregateInputObjectSchema as AgentDecisionCountOrderByAggregateInputObjectSchema } from './AgentDecisionCountOrderByAggregateInput.schema';
import { AgentDecisionMaxOrderByAggregateInputObjectSchema as AgentDecisionMaxOrderByAggregateInputObjectSchema } from './AgentDecisionMaxOrderByAggregateInput.schema';
import { AgentDecisionMinOrderByAggregateInputObjectSchema as AgentDecisionMinOrderByAggregateInputObjectSchema } from './AgentDecisionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  agentType: SortOrderSchema.optional(),
  decision: SortOrderSchema.optional(),
  reasoning: SortOrderSchema.optional(),
  metrics: SortOrderSchema.optional(),
  executed: SortOrderSchema.optional(),
  executedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AgentDecisionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AgentDecisionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AgentDecisionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AgentDecisionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AgentDecisionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionOrderByWithAggregationInput>;
export const AgentDecisionOrderByWithAggregationInputObjectZodSchema = makeSchema();
