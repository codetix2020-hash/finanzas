import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeyOrderByWithRelationInputObjectSchema as PasskeyOrderByWithRelationInputObjectSchema } from './objects/PasskeyOrderByWithRelationInput.schema';
import { PasskeyWhereInputObjectSchema as PasskeyWhereInputObjectSchema } from './objects/PasskeyWhereInput.schema';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './objects/PasskeyWhereUniqueInput.schema';
import { PasskeyCountAggregateInputObjectSchema as PasskeyCountAggregateInputObjectSchema } from './objects/PasskeyCountAggregateInput.schema';

export const PasskeyCountSchema: z.ZodType<Prisma.PasskeyCountArgs> = z.object({ orderBy: z.union([PasskeyOrderByWithRelationInputObjectSchema, PasskeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PasskeyWhereInputObjectSchema.optional(), cursor: PasskeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PasskeyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PasskeyCountArgs>;

export const PasskeyCountZodSchema = z.object({ orderBy: z.union([PasskeyOrderByWithRelationInputObjectSchema, PasskeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PasskeyWhereInputObjectSchema.optional(), cursor: PasskeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PasskeyCountAggregateInputObjectSchema ]).optional() }).strict();