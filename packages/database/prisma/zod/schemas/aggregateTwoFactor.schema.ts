import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorOrderByWithRelationInputObjectSchema as TwoFactorOrderByWithRelationInputObjectSchema } from './objects/TwoFactorOrderByWithRelationInput.schema';
import { TwoFactorWhereInputObjectSchema as TwoFactorWhereInputObjectSchema } from './objects/TwoFactorWhereInput.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './objects/TwoFactorWhereUniqueInput.schema';
import { TwoFactorCountAggregateInputObjectSchema as TwoFactorCountAggregateInputObjectSchema } from './objects/TwoFactorCountAggregateInput.schema';
import { TwoFactorMinAggregateInputObjectSchema as TwoFactorMinAggregateInputObjectSchema } from './objects/TwoFactorMinAggregateInput.schema';
import { TwoFactorMaxAggregateInputObjectSchema as TwoFactorMaxAggregateInputObjectSchema } from './objects/TwoFactorMaxAggregateInput.schema';

export const TwoFactorAggregateSchema: z.ZodType<Prisma.TwoFactorAggregateArgs> = z.object({ orderBy: z.union([TwoFactorOrderByWithRelationInputObjectSchema, TwoFactorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TwoFactorWhereInputObjectSchema.optional(), cursor: TwoFactorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TwoFactorCountAggregateInputObjectSchema ]).optional(), _min: TwoFactorMinAggregateInputObjectSchema.optional(), _max: TwoFactorMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TwoFactorAggregateArgs>;

export const TwoFactorAggregateZodSchema = z.object({ orderBy: z.union([TwoFactorOrderByWithRelationInputObjectSchema, TwoFactorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TwoFactorWhereInputObjectSchema.optional(), cursor: TwoFactorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TwoFactorCountAggregateInputObjectSchema ]).optional(), _min: TwoFactorMinAggregateInputObjectSchema.optional(), _max: TwoFactorMaxAggregateInputObjectSchema.optional() }).strict();