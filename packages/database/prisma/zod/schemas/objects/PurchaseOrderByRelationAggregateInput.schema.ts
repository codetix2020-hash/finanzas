import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PurchaseOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PurchaseOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseOrderByRelationAggregateInput>;
export const PurchaseOrderByRelationAggregateInputObjectZodSchema = makeSchema();
