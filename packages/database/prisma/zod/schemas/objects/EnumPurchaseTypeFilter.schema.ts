import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema';
import { NestedEnumPurchaseTypeFilterObjectSchema as NestedEnumPurchaseTypeFilterObjectSchema } from './NestedEnumPurchaseTypeFilter.schema'

const makeSchema = () => z.object({
  equals: PurchaseTypeSchema.optional(),
  in: PurchaseTypeSchema.array().optional(),
  notIn: PurchaseTypeSchema.array().optional(),
  not: z.union([PurchaseTypeSchema, z.lazy(() => NestedEnumPurchaseTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumPurchaseTypeFilterObjectSchema: z.ZodType<Prisma.EnumPurchaseTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPurchaseTypeFilter>;
export const EnumPurchaseTypeFilterObjectZodSchema = makeSchema();
