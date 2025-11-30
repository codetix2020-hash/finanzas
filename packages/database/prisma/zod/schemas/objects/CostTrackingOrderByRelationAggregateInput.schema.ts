import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CostTrackingOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CostTrackingOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingOrderByRelationAggregateInput>;
export const CostTrackingOrderByRelationAggregateInputObjectZodSchema = makeSchema();
