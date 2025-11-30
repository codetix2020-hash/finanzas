import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { DecisionSchema } from '../enums/Decision.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDecisionFilterObjectSchema as NestedEnumDecisionFilterObjectSchema } from './NestedEnumDecisionFilter.schema'

const nestedenumdecisionwithaggregatesfilterSchema = z.object({
  equals: DecisionSchema.optional(),
  in: DecisionSchema.array().optional(),
  notIn: DecisionSchema.array().optional(),
  not: z.union([DecisionSchema, z.lazy(() => NestedEnumDecisionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDecisionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDecisionFilterObjectSchema).optional()
}).strict();
export const NestedEnumDecisionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumDecisionWithAggregatesFilter> = nestedenumdecisionwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDecisionWithAggregatesFilter>;
export const NestedEnumDecisionWithAggregatesFilterObjectZodSchema = nestedenumdecisionwithaggregatesfilterSchema;
