import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatCreateManyInputObjectSchema as AiChatCreateManyInputObjectSchema } from './objects/AiChatCreateManyInput.schema';

export const AiChatCreateManySchema: z.ZodType<Prisma.AiChatCreateManyArgs> = z.object({ data: z.union([ AiChatCreateManyInputObjectSchema, z.array(AiChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiChatCreateManyArgs>;

export const AiChatCreateManyZodSchema = z.object({ data: z.union([ AiChatCreateManyInputObjectSchema, z.array(AiChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();