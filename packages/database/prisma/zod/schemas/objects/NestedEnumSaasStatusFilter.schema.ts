import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasStatusSchema } from '../enums/SaasStatus.schema'

const nestedenumsaasstatusfilterSchema = z.object({
  equals: SaasStatusSchema.optional(),
  in: SaasStatusSchema.array().optional(),
  notIn: SaasStatusSchema.array().optional(),
  not: z.union([SaasStatusSchema, z.lazy(() => NestedEnumSaasStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSaasStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumSaasStatusFilter> = nestedenumsaasstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSaasStatusFilter>;
export const NestedEnumSaasStatusFilterObjectZodSchema = nestedenumsaasstatusfilterSchema;
