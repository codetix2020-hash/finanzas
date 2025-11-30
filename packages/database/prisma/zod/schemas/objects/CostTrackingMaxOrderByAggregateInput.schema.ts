import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  createdAt: SortOrderSchema.optional()
}).strict();
export const CostTrackingMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CostTrackingMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingMaxOrderByAggregateInput>;
export const CostTrackingMaxOrderByAggregateInputObjectZodSchema = makeSchema();
