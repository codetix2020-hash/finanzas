import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatSelectObjectSchema as AiChatSelectObjectSchema } from './objects/AiChatSelect.schema';
import { AiChatCreateManyInputObjectSchema as AiChatCreateManyInputObjectSchema } from './objects/AiChatCreateManyInput.schema';

export const AiChatCreateManyAndReturnSchema: z.ZodType<Prisma.AiChatCreateManyAndReturnArgs> = z.object({ select: AiChatSelectObjectSchema.optional(), data: z.union([ AiChatCreateManyInputObjectSchema, z.array(AiChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiChatCreateManyAndReturnArgs>;

export const AiChatCreateManyAndReturnZodSchema = z.object({ select: AiChatSelectObjectSchema.optional(), data: z.union([ AiChatCreateManyInputObjectSchema, z.array(AiChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();