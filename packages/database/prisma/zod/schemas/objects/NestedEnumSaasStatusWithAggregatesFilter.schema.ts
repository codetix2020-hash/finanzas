import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasStatusSchema } from '../enums/SaasStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSaasStatusFilterObjectSchema as NestedEnumSaasStatusFilterObjectSchema } from './NestedEnumSaasStatusFilter.schema'

const nestedenumsaasstatuswithaggregatesfilterSchema = z.object({
  equals: SaasStatusSchema.optional(),
  in: SaasStatusSchema.array().optional(),
  notIn: SaasStatusSchema.array().optional(),
  not: z.union([SaasStatusSchema, z.lazy(() => NestedEnumSaasStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSaasStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSaasStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumSaasStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSaasStatusWithAggregatesFilter> = nestedenumsaasstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSaasStatusWithAggregatesFilter>;
export const NestedEnumSaasStatusWithAggregatesFilterObjectZodSchema = nestedenumsaasstatuswithaggregatesfilterSchema;
