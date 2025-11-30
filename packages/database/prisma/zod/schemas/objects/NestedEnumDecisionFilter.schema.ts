import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { DecisionSchema } from '../enums/Decision.schema'

const nestedenumdecisionfilterSchema = z.object({
  equals: DecisionSchema.optional(),
  in: DecisionSchema.array().optional(),
  notIn: DecisionSchema.array().optional(),
  not: z.union([DecisionSchema, z.lazy(() => NestedEnumDecisionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDecisionFilterObjectSchema: z.ZodType<Prisma.NestedEnumDecisionFilter> = nestedenumdecisionfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDecisionFilter>;
export const NestedEnumDecisionFilterObjectZodSchema = nestedenumdecisionfilterSchema;
