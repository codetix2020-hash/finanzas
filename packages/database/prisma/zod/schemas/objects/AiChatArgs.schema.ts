import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatSelectObjectSchema as AiChatSelectObjectSchema } from './AiChatSelect.schema';
import { AiChatIncludeObjectSchema as AiChatIncludeObjectSchema } from './AiChatInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AiChatSelectObjectSchema).optional(),
  include: z.lazy(() => AiChatIncludeObjectSchema).optional()
}).strict();
export const AiChatArgsObjectSchema = makeSchema();
export const AiChatArgsObjectZodSchema = makeSchema();
