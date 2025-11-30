import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { OrganizationCreateNestedOneWithoutAiChatsInputObjectSchema as OrganizationCreateNestedOneWithoutAiChatsInputObjectSchema } from './OrganizationCreateNestedOneWithoutAiChatsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string().optional().nullable(),
  messages: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutAiChatsInputObjectSchema).optional()
}).strict();
export const AiChatCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AiChatCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateWithoutUserInput>;
export const AiChatCreateWithoutUserInputObjectZodSchema = makeSchema();
