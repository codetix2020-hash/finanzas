import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatSelectObjectSchema as AiChatSelectObjectSchema } from './objects/AiChatSelect.schema';
import { AiChatUpdateManyMutationInputObjectSchema as AiChatUpdateManyMutationInputObjectSchema } from './objects/AiChatUpdateManyMutationInput.schema';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './objects/AiChatWhereInput.schema';

export const AiChatUpdateManyAndReturnSchema: z.ZodType<Prisma.AiChatUpdateManyAndReturnArgs> = z.object({ select: AiChatSelectObjectSchema.optional(), data: AiChatUpdateManyMutationInputObjectSchema, where: AiChatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiChatUpdateManyAndReturnArgs>;

export const AiChatUpdateManyAndReturnZodSchema = z.object({ select: AiChatSelectObjectSchema.optional(), data: AiChatUpdateManyMutationInputObjectSchema, where: AiChatWhereInputObjectSchema.optional() }).strict();