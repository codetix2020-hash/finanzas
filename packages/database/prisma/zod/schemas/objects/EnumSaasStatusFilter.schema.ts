import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasStatusSchema } from '../enums/SaasStatus.schema';
import { NestedEnumSaasStatusFilterObjectSchema as NestedEnumSaasStatusFilterObjectSchema } from './NestedEnumSaasStatusFilter.schema'

const makeSchema = () => z.object({
  equals: SaasStatusSchema.optional(),
  in: SaasStatusSchema.array().optional(),
  notIn: SaasStatusSchema.array().optional(),
  not: z.union([SaasStatusSchema, z.lazy(() => NestedEnumSaasStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumSaasStatusFilterObjectSchema: z.ZodType<Prisma.EnumSaasStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSaasStatusFilter>;
export const EnumSaasStatusFilterObjectZodSchema = makeSchema();
