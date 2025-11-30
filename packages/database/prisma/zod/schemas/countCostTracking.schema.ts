import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingOrderByWithRelationInputObjectSchema as CostTrackingOrderByWithRelationInputObjectSchema } from './objects/CostTrackingOrderByWithRelationInput.schema';
import { CostTrackingWhereInputObjectSchema as CostTrackingWhereInputObjectSchema } from './objects/CostTrackingWhereInput.schema';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './objects/CostTrackingWhereUniqueInput.schema';
import { CostTrackingCountAggregateInputObjectSchema as CostTrackingCountAggregateInputObjectSchema } from './objects/CostTrackingCountAggregateInput.schema';

export const CostTrackingCountSchema: z.ZodType<Prisma.CostTrackingCountArgs> = z.object({ orderBy: z.union([CostTrackingOrderByWithRelationInputObjectSchema, CostTrackingOrderByWithRelationInputObjectSchema.array()]).optional(), where: CostTrackingWhereInputObjectSchema.optional(), cursor: CostTrackingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CostTrackingCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CostTrackingCountArgs>;

export const CostTrackingCountZodSchema = z.object({ orderBy: z.union([CostTrackingOrderByWithRelationInputObjectSchema, CostTrackingOrderByWithRelationInputObjectSchema.array()]).optional(), where: CostTrackingWhereInputObjectSchema.optional(), cursor: CostTrackingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CostTrackingCountAggregateInputObjectSchema ]).optional() }).strict();