import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { OrganizationCreateNestedOneWithoutAiChatsInputObjectSchema as OrganizationCreateNestedOneWithoutAiChatsInputObjectSchema } from './OrganizationCreateNestedOneWithoutAiChatsInput.schema';
import { UserCreateNestedOneWithoutAiChatsInputObjectSchema as UserCreateNestedOneWithoutAiChatsInputObjectSchema } from './UserCreateNestedOneWithoutAiChatsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string().optional().nullable(),
  messages: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutAiChatsInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAiChatsInputObjectSchema).optional()
}).strict();
export const AiChatCreateInputObjectSchema: z.ZodType<Prisma.AiChatCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateInput>;
export const AiChatCreateInputObjectZodSchema = makeSchema();
