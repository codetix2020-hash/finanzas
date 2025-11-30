import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './objects/AiChatWhereInput.schema';

export const AiChatDeleteManySchema: z.ZodType<Prisma.AiChatDeleteManyArgs> = z.object({ where: AiChatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiChatDeleteManyArgs>;

export const AiChatDeleteManyZodSchema = z.object({ where: AiChatWhereInputObjectSchema.optional() }).strict();