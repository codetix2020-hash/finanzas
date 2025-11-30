import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema';
import { NestedEnumPurchaseTypeWithAggregatesFilterObjectSchema as NestedEnumPurchaseTypeWithAggregatesFilterObjectSchema } from './NestedEnumPurchaseTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPurchaseTypeFilterObjectSchema as NestedEnumPurchaseTypeFilterObjectSchema } from './NestedEnumPurchaseTypeFilter.schema'

const makeSchema = () => z.object({
  equals: PurchaseTypeSchema.optional(),
  in: PurchaseTypeSchema.array().optional(),
  notIn: PurchaseTypeSchema.array().optional(),
  not: z.union([PurchaseTypeSchema, z.lazy(() => NestedEnumPurchaseTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPurchaseTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPurchaseTypeFilterObjectSchema).optional()
}).strict();
export const EnumPurchaseTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPurchaseTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPurchaseTypeWithAggregatesFilter>;
export const EnumPurchaseTypeWithAggregatesFilterObjectZodSchema = makeSchema();
