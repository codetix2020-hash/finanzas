import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatSelectObjectSchema as AiChatSelectObjectSchema } from './objects/AiChatSelect.schema';
import { AiChatIncludeObjectSchema as AiChatIncludeObjectSchema } from './objects/AiChatInclude.schema';
import { AiChatUpdateInputObjectSchema as AiChatUpdateInputObjectSchema } from './objects/AiChatUpdateInput.schema';
import { AiChatUncheckedUpdateInputObjectSchema as AiChatUncheckedUpdateInputObjectSchema } from './objects/AiChatUncheckedUpdateInput.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './objects/AiChatWhereUniqueInput.schema';

export const AiChatUpdateOneSchema: z.ZodType<Prisma.AiChatUpdateArgs> = z.object({ select: AiChatSelectObjectSchema.optional(), include: AiChatIncludeObjectSchema.optional(), data: z.union([AiChatUpdateInputObjectSchema, AiChatUncheckedUpdateInputObjectSchema]), where: AiChatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiChatUpdateArgs>;

export const AiChatUpdateOneZodSchema = z.object({ select: AiChatSelectObjectSchema.optional(), include: AiChatIncludeObjectSchema.optional(), data: z.union([AiChatUpdateInputObjectSchema, AiChatUncheckedUpdateInputObjectSchema]), where: AiChatWhereUniqueInputObjectSchema }).strict();