import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OrganizationUpdateOneWithoutAiChatsNestedInputObjectSchema as OrganizationUpdateOneWithoutAiChatsNestedInputObjectSchema } from './OrganizationUpdateOneWithoutAiChatsNestedInput.schema';
import { UserUpdateOneWithoutAiChatsNestedInputObjectSchema as UserUpdateOneWithoutAiChatsNestedInputObjectSchema } from './UserUpdateOneWithoutAiChatsNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  messages: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutAiChatsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutAiChatsNestedInputObjectSchema).optional()
}).strict();
export const AiChatUpdateInputObjectSchema: z.ZodType<Prisma.AiChatUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUpdateInput>;
export const AiChatUpdateInputObjectZodSchema = makeSchema();
