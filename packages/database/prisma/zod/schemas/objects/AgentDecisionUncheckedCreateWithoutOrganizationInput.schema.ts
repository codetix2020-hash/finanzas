import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { DecisionSchema } from '../enums/Decision.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  agentType: z.string(),
  decision: DecisionSchema,
  reasoning: z.string(),
  metrics: z.union([JsonNullValueInputSchema, jsonSchema]),
  executed: z.boolean().optional(),
  executedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AgentDecisionUncheckedCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionUncheckedCreateWithoutOrganizationInput>;
export const AgentDecisionUncheckedCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
