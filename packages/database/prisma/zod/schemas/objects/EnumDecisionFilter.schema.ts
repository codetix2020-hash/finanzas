import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { DecisionSchema } from '../enums/Decision.schema';
import { NestedEnumDecisionFilterObjectSchema as NestedEnumDecisionFilterObjectSchema } from './NestedEnumDecisionFilter.schema'

const makeSchema = () => z.object({
  equals: DecisionSchema.optional(),
  in: DecisionSchema.array().optional(),
  notIn: DecisionSchema.array().optional(),
  not: z.union([DecisionSchema, z.lazy(() => NestedEnumDecisionFilterObjectSchema)]).optional()
}).strict();
export const EnumDecisionFilterObjectSchema: z.ZodType<Prisma.EnumDecisionFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDecisionFilter>;
export const EnumDecisionFilterObjectZodSchema = makeSchema();
