import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorOrderByWithRelationInputObjectSchema as TwoFactorOrderByWithRelationInputObjectSchema } from './objects/TwoFactorOrderByWithRelationInput.schema';
import { TwoFactorWhereInputObjectSchema as TwoFactorWhereInputObjectSchema } from './objects/TwoFactorWhereInput.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './objects/TwoFactorWhereUniqueInput.schema';
import { TwoFactorCountAggregateInputObjectSchema as TwoFactorCountAggregateInputObjectSchema } from './objects/TwoFactorCountAggregateInput.schema';

export const TwoFactorCountSchema: z.ZodType<Prisma.TwoFactorCountArgs> = z.object({ orderBy: z.union([TwoFactorOrderByWithRelationInputObjectSchema, TwoFactorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TwoFactorWhereInputObjectSchema.optional(), cursor: TwoFactorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TwoFactorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TwoFactorCountArgs>;

export const TwoFactorCountZodSchema = z.object({ orderBy: z.union([TwoFactorOrderByWithRelationInputObjectSchema, TwoFactorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TwoFactorWhereInputObjectSchema.optional(), cursor: TwoFactorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TwoFactorCountAggregateInputObjectSchema ]).optional() }).strict();