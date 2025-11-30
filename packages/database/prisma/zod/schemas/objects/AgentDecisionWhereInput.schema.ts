import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumDecisionFilterObjectSchema as EnumDecisionFilterObjectSchema } from './EnumDecisionFilter.schema';
import { DecisionSchema } from '../enums/Decision.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrganizationScalarRelationFilterObjectSchema as OrganizationScalarRelationFilterObjectSchema } from './OrganizationScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const agentdecisionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgentDecisionWhereInputObjectSchema), z.lazy(() => AgentDecisionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgentDecisionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgentDecisionWhereInputObjectSchema), z.lazy(() => AgentDecisionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  agentType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  decision: z.union([z.lazy(() => EnumDecisionFilterObjectSchema), DecisionSchema]).optional(),
  reasoning: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  metrics: z.lazy(() => JsonFilterObjectSchema).optional(),
  executed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  executedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  organization: z.union([z.lazy(() => OrganizationScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional()
}).strict();
export const AgentDecisionWhereInputObjectSchema: z.ZodType<Prisma.AgentDecisionWhereInput> = agentdecisionwhereinputSchema as unknown as z.ZodType<Prisma.AgentDecisionWhereInput>;
export const AgentDecisionWhereInputObjectZodSchema = agentdecisionwhereinputSchema;
