import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  messages: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AiChatUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AiChatUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUncheckedCreateWithoutUserInput>;
export const AiChatUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
