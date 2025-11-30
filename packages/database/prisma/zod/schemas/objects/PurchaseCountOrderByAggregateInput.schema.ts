import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  subscriptionId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const PurchaseCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PurchaseCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCountOrderByAggregateInput>;
export const PurchaseCountOrderByAggregateInputObjectZodSchema = makeSchema();
