import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatUpdateManyMutationInputObjectSchema as AiChatUpdateManyMutationInputObjectSchema } from './objects/AiChatUpdateManyMutationInput.schema';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './objects/AiChatWhereInput.schema';

export const AiChatUpdateManySchema: z.ZodType<Prisma.AiChatUpdateManyArgs> = z.object({ data: AiChatUpdateManyMutationInputObjectSchema, where: AiChatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiChatUpdateManyArgs>;

export const AiChatUpdateManyZodSchema = z.object({ data: AiChatUpdateManyMutationInputObjectSchema, where: AiChatWhereInputObjectSchema.optional() }).strict();