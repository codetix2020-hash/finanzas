import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecisionSchema } from '../enums/Decision.schema';
import { EnumDecisionFieldUpdateOperationsInputObjectSchema as EnumDecisionFieldUpdateOperationsInputObjectSchema } from './EnumDecisionFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  agentType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  decision: z.union([DecisionSchema, z.lazy(() => EnumDecisionFieldUpdateOperationsInputObjectSchema)]).optional(),
  reasoning: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  metrics: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  executed: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  executedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AgentDecisionUpdateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AgentDecisionUpdateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionUpdateWithoutOrganizationInput>;
export const AgentDecisionUpdateWithoutOrganizationInputObjectZodSchema = makeSchema();
