import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './objects/AiChatWhereInput.schema';
import { AiChatOrderByWithAggregationInputObjectSchema as AiChatOrderByWithAggregationInputObjectSchema } from './objects/AiChatOrderByWithAggregationInput.schema';
import { AiChatScalarWhereWithAggregatesInputObjectSchema as AiChatScalarWhereWithAggregatesInputObjectSchema } from './objects/AiChatScalarWhereWithAggregatesInput.schema';
import { AiChatScalarFieldEnumSchema } from './enums/AiChatScalarFieldEnum.schema';
import { AiChatCountAggregateInputObjectSchema as AiChatCountAggregateInputObjectSchema } from './objects/AiChatCountAggregateInput.schema';
import { AiChatMinAggregateInputObjectSchema as AiChatMinAggregateInputObjectSchema } from './objects/AiChatMinAggregateInput.schema';
import { AiChatMaxAggregateInputObjectSchema as AiChatMaxAggregateInputObjectSchema } from './objects/AiChatMaxAggregateInput.schema';

export const AiChatGroupBySchema: z.ZodType<Prisma.AiChatGroupByArgs> = z.object({ where: AiChatWhereInputObjectSchema.optional(), orderBy: z.union([AiChatOrderByWithAggregationInputObjectSchema, AiChatOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AiChatScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AiChatScalarFieldEnumSchema), _count: z.union([ z.literal(true), AiChatCountAggregateInputObjectSchema ]).optional(), _min: AiChatMinAggregateInputObjectSchema.optional(), _max: AiChatMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiChatGroupByArgs>;

export const AiChatGroupByZodSchema = z.object({ where: AiChatWhereInputObjectSchema.optional(), orderBy: z.union([AiChatOrderByWithAggregationInputObjectSchema, AiChatOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AiChatScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AiChatScalarFieldEnumSchema), _count: z.union([ z.literal(true), AiChatCountAggregateInputObjectSchema ]).optional(), _min: AiChatMinAggregateInputObjectSchema.optional(), _max: AiChatMaxAggregateInputObjectSchema.optional() }).strict();