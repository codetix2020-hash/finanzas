import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  messages: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AiChatCreateManyOrganizationInputObjectSchema: z.ZodType<Prisma.AiChatCreateManyOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateManyOrganizationInput>;
export const AiChatCreateManyOrganizationInputObjectZodSchema = makeSchema();
