import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  inputTokens: SortOrderSchema.optional(),
  outputTokens: SortOrderSchema.optional(),
  totalTokens: SortOrderSchema.optional(),
  estimatedCost: SortOrderSchema.optional()
}).strict();
export const CostTrackingSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CostTrackingSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingSumOrderByAggregateInput>;
export const CostTrackingSumOrderByAggregateInputObjectZodSchema = makeSchema();
