import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { UserCreateNestedOneWithoutAiChatsInputObjectSchema as UserCreateNestedOneWithoutAiChatsInputObjectSchema } from './UserCreateNestedOneWithoutAiChatsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string().optional().nullable(),
  messages: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAiChatsInputObjectSchema).optional()
}).strict();
export const AiChatCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AiChatCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateWithoutOrganizationInput>;
export const AiChatCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
