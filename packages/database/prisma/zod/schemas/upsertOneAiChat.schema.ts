import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatSelectObjectSchema as AiChatSelectObjectSchema } from './objects/AiChatSelect.schema';
import { AiChatIncludeObjectSchema as AiChatIncludeObjectSchema } from './objects/AiChatInclude.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './objects/AiChatWhereUniqueInput.schema';
import { AiChatCreateInputObjectSchema as AiChatCreateInputObjectSchema } from './objects/AiChatCreateInput.schema';
import { AiChatUncheckedCreateInputObjectSchema as AiChatUncheckedCreateInputObjectSchema } from './objects/AiChatUncheckedCreateInput.schema';
import { AiChatUpdateInputObjectSchema as AiChatUpdateInputObjectSchema } from './objects/AiChatUpdateInput.schema';
import { AiChatUncheckedUpdateInputObjectSchema as AiChatUncheckedUpdateInputObjectSchema } from './objects/AiChatUncheckedUpdateInput.schema';

export const AiChatUpsertOneSchema: z.ZodType<Prisma.AiChatUpsertArgs> = z.object({ select: AiChatSelectObjectSchema.optional(), include: AiChatIncludeObjectSchema.optional(), where: AiChatWhereUniqueInputObjectSchema, create: z.union([ AiChatCreateInputObjectSchema, AiChatUncheckedCreateInputObjectSchema ]), update: z.union([ AiChatUpdateInputObjectSchema, AiChatUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AiChatUpsertArgs>;

export const AiChatUpsertOneZodSchema = z.object({ select: AiChatSelectObjectSchema.optional(), include: AiChatIncludeObjectSchema.optional(), where: AiChatWhereUniqueInputObjectSchema, create: z.union([ AiChatCreateInputObjectSchema, AiChatUncheckedCreateInputObjectSchema ]), update: z.union([ AiChatUpdateInputObjectSchema, AiChatUncheckedUpdateInputObjectSchema ]) }).strict();