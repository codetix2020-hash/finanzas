import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './AiChatWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AiChatWhereInputObjectSchema).optional(),
  some: z.lazy(() => AiChatWhereInputObjectSchema).optional(),
  none: z.lazy(() => AiChatWhereInputObjectSchema).optional()
}).strict();
export const AiChatListRelationFilterObjectSchema: z.ZodType<Prisma.AiChatListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AiChatListRelationFilter>;
export const AiChatListRelationFilterObjectZodSchema = makeSchema();
