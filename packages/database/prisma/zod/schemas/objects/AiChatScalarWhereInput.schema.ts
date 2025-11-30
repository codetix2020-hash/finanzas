import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const aichatscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiChatScalarWhereInputObjectSchema), z.lazy(() => AiChatScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiChatScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiChatScalarWhereInputObjectSchema), z.lazy(() => AiChatScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  messages: z.lazy(() => JsonFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AiChatScalarWhereInputObjectSchema: z.ZodType<Prisma.AiChatScalarWhereInput> = aichatscalarwhereinputSchema as unknown as z.ZodType<Prisma.AiChatScalarWhereInput>;
export const AiChatScalarWhereInputObjectZodSchema = aichatscalarwhereinputSchema;
