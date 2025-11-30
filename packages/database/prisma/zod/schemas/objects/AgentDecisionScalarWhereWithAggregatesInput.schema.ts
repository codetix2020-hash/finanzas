import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumDecisionWithAggregatesFilterObjectSchema as EnumDecisionWithAggregatesFilterObjectSchema } from './EnumDecisionWithAggregatesFilter.schema';
import { DecisionSchema } from '../enums/Decision.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const agentdecisionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AgentDecisionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgentDecisionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgentDecisionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgentDecisionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgentDecisionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  agentType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  decision: z.union([z.lazy(() => EnumDecisionWithAggregatesFilterObjectSchema), DecisionSchema]).optional(),
  reasoning: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  metrics: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  executed: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  executedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AgentDecisionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AgentDecisionScalarWhereWithAggregatesInput> = agentdecisionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AgentDecisionScalarWhereWithAggregatesInput>;
export const AgentDecisionScalarWhereWithAggregatesInputObjectZodSchema = agentdecisionscalarwherewithaggregatesinputSchema;
