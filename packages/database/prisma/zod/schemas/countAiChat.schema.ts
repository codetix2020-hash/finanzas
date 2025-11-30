import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatOrderByWithRelationInputObjectSchema as AiChatOrderByWithRelationInputObjectSchema } from './objects/AiChatOrderByWithRelationInput.schema';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './objects/AiChatWhereInput.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './objects/AiChatWhereUniqueInput.schema';
import { AiChatCountAggregateInputObjectSchema as AiChatCountAggregateInputObjectSchema } from './objects/AiChatCountAggregateInput.schema';

export const AiChatCountSchema: z.ZodType<Prisma.AiChatCountArgs> = z.object({ orderBy: z.union([AiChatOrderByWithRelationInputObjectSchema, AiChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiChatWhereInputObjectSchema.optional(), cursor: AiChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiChatCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AiChatCountArgs>;

export const AiChatCountZodSchema = z.object({ orderBy: z.union([AiChatOrderByWithRelationInputObjectSchema, AiChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiChatWhereInputObjectSchema.optional(), cursor: AiChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiChatCountAggregateInputObjectSchema ]).optional() }).strict();