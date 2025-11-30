import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumPurchaseTypeWithAggregatesFilterObjectSchema as EnumPurchaseTypeWithAggregatesFilterObjectSchema } from './EnumPurchaseTypeWithAggregatesFilter.schema';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const purchasescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PurchaseScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PurchaseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PurchaseScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PurchaseScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PurchaseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumPurchaseTypeWithAggregatesFilterObjectSchema), PurchaseTypeSchema]).optional(),
  customerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  subscriptionId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PurchaseScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PurchaseScalarWhereWithAggregatesInput> = purchasescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PurchaseScalarWhereWithAggregatesInput>;
export const PurchaseScalarWhereWithAggregatesInputObjectZodSchema = purchasescalarwherewithaggregatesinputSchema;
