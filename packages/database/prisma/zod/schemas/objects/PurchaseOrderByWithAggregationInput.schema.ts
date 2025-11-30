import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PurchaseCountOrderByAggregateInputObjectSchema as PurchaseCountOrderByAggregateInputObjectSchema } from './PurchaseCountOrderByAggregateInput.schema';
import { PurchaseMaxOrderByAggregateInputObjectSchema as PurchaseMaxOrderByAggregateInputObjectSchema } from './PurchaseMaxOrderByAggregateInput.schema';
import { PurchaseMinOrderByAggregateInputObjectSchema as PurchaseMinOrderByAggregateInputObjectSchema } from './PurchaseMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  subscriptionId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  productId: SortOrderSchema.optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PurchaseCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PurchaseMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PurchaseMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PurchaseOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PurchaseOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseOrderByWithAggregationInput>;
export const PurchaseOrderByWithAggregationInputObjectZodSchema = makeSchema();
