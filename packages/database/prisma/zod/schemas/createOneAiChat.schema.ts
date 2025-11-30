import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatSelectObjectSchema as AiChatSelectObjectSchema } from './objects/AiChatSelect.schema';
import { AiChatIncludeObjectSchema as AiChatIncludeObjectSchema } from './objects/AiChatInclude.schema';
import { AiChatCreateInputObjectSchema as AiChatCreateInputObjectSchema } from './objects/AiChatCreateInput.schema';
import { AiChatUncheckedCreateInputObjectSchema as AiChatUncheckedCreateInputObjectSchema } from './objects/AiChatUncheckedCreateInput.schema';

export const AiChatCreateOneSchema: z.ZodType<Prisma.AiChatCreateArgs> = z.object({ select: AiChatSelectObjectSchema.optional(), include: AiChatIncludeObjectSchema.optional(), data: z.union([AiChatCreateInputObjectSchema, AiChatUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AiChatCreateArgs>;

export const AiChatCreateOneZodSchema = z.object({ select: AiChatSelectObjectSchema.optional(), include: AiChatIncludeObjectSchema.optional(), data: z.union([AiChatCreateInputObjectSchema, AiChatUncheckedCreateInputObjectSchema]) }).strict();