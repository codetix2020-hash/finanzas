import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './AiChatWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountAiChatsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountAiChatsArgsObjectZodSchema = makeSchema();
