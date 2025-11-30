import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatSelectObjectSchema as AiChatSelectObjectSchema } from './objects/AiChatSelect.schema';
import { AiChatIncludeObjectSchema as AiChatIncludeObjectSchema } from './objects/AiChatInclude.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './objects/AiChatWhereUniqueInput.schema';

export const AiChatFindUniqueSchema: z.ZodType<Prisma.AiChatFindUniqueArgs> = z.object({ select: AiChatSelectObjectSchema.optional(), include: AiChatIncludeObjectSchema.optional(), where: AiChatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiChatFindUniqueArgs>;

export const AiChatFindUniqueZodSchema = z.object({ select: AiChatSelectObjectSchema.optional(), include: AiChatIncludeObjectSchema.optional(), where: AiChatWhereUniqueInputObjectSchema }).strict();