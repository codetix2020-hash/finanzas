import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema'

const nestedenumpurchasetypefilterSchema = z.object({
  equals: PurchaseTypeSchema.optional(),
  in: PurchaseTypeSchema.array().optional(),
  notIn: PurchaseTypeSchema.array().optional(),
  not: z.union([PurchaseTypeSchema, z.lazy(() => NestedEnumPurchaseTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumPurchaseTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumPurchaseTypeFilter> = nestedenumpurchasetypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumPurchaseTypeFilter>;
export const NestedEnumPurchaseTypeFilterObjectZodSchema = nestedenumpurchasetypefilterSchema;
