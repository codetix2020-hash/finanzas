import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumPurchaseTypeFilterObjectSchema as EnumPurchaseTypeFilterObjectSchema } from './EnumPurchaseTypeFilter.schema';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const purchasescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PurchaseScalarWhereInputObjectSchema), z.lazy(() => PurchaseScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PurchaseScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PurchaseScalarWhereInputObjectSchema), z.lazy(() => PurchaseScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumPurchaseTypeFilterObjectSchema), PurchaseTypeSchema]).optional(),
  customerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  subscriptionId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PurchaseScalarWhereInputObjectSchema: z.ZodType<Prisma.PurchaseScalarWhereInput> = purchasescalarwhereinputSchema as unknown as z.ZodType<Prisma.PurchaseScalarWhereInput>;
export const PurchaseScalarWhereInputObjectZodSchema = purchasescalarwhereinputSchema;
