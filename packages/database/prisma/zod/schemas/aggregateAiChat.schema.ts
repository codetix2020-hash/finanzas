import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatOrderByWithRelationInputObjectSchema as AiChatOrderByWithRelationInputObjectSchema } from './objects/AiChatOrderByWithRelationInput.schema';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './objects/AiChatWhereInput.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './objects/AiChatWhereUniqueInput.schema';
import { AiChatCountAggregateInputObjectSchema as AiChatCountAggregateInputObjectSchema } from './objects/AiChatCountAggregateInput.schema';
import { AiChatMinAggregateInputObjectSchema as AiChatMinAggregateInputObjectSchema } from './objects/AiChatMinAggregateInput.schema';
import { AiChatMaxAggregateInputObjectSchema as AiChatMaxAggregateInputObjectSchema } from './objects/AiChatMaxAggregateInput.schema';

export const AiChatAggregateSchema: z.ZodType<Prisma.AiChatAggregateArgs> = z.object({ orderBy: z.union([AiChatOrderByWithRelationInputObjectSchema, AiChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiChatWhereInputObjectSchema.optional(), cursor: AiChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AiChatCountAggregateInputObjectSchema ]).optional(), _min: AiChatMinAggregateInputObjectSchema.optional(), _max: AiChatMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiChatAggregateArgs>;

export const AiChatAggregateZodSchema = z.object({ orderBy: z.union([AiChatOrderByWithRelationInputObjectSchema, AiChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiChatWhereInputObjectSchema.optional(), cursor: AiChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AiChatCountAggregateInputObjectSchema ]).optional(), _min: AiChatMinAggregateInputObjectSchema.optional(), _max: AiChatMaxAggregateInputObjectSchema.optional() }).strict();