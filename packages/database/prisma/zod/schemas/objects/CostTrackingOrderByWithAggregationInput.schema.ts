import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CostTrackingCountOrderByAggregateInputObjectSchema as CostTrackingCountOrderByAggregateInputObjectSchema } from './CostTrackingCountOrderByAggregateInput.schema';
import { CostTrackingAvgOrderByAggregateInputObjectSchema as CostTrackingAvgOrderByAggregateInputObjectSchema } from './CostTrackingAvgOrderByAggregateInput.schema';
import { CostTrackingMaxOrderByAggregateInputObjectSchema as CostTrackingMaxOrderByAggregateInputObjectSchema } from './CostTrackingMaxOrderByAggregateInput.schema';
import { CostTrackingMinOrderByAggregateInputObjectSchema as CostTrackingMinOrderByAggregateInputObjectSchema } from './CostTrackingMinOrderByAggregateInput.schema';
import { CostTrackingSumOrderByAggregateInputObjectSchema as CostTrackingSumOrderByAggregateInputObjectSchema } from './CostTrackingSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  provider: SortOrderSchema.optional(),
  requestId: SortOrderSchema.optional(),
  inputTokens: SortOrderSchema.optional(),
  outputTokens: SortOrderSchema.optional(),
  totalTokens: SortOrderSchema.optional(),
  estimatedCost: SortOrderSchema.optional(),
  endpoint: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CostTrackingCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CostTrackingAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CostTrackingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CostTrackingMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CostTrackingSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CostTrackingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CostTrackingOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingOrderByWithAggregationInput>;
export const CostTrackingOrderByWithAggregationInputObjectZodSchema = makeSchema();
