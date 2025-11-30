import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseOrderByWithRelationInputObjectSchema as PurchaseOrderByWithRelationInputObjectSchema } from './objects/PurchaseOrderByWithRelationInput.schema';
import { PurchaseWhereInputObjectSchema as PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';
import { PurchaseCountAggregateInputObjectSchema as PurchaseCountAggregateInputObjectSchema } from './objects/PurchaseCountAggregateInput.schema';
import { PurchaseMinAggregateInputObjectSchema as PurchaseMinAggregateInputObjectSchema } from './objects/PurchaseMinAggregateInput.schema';
import { PurchaseMaxAggregateInputObjectSchema as PurchaseMaxAggregateInputObjectSchema } from './objects/PurchaseMaxAggregateInput.schema';

export const PurchaseAggregateSchema: z.ZodType<Prisma.PurchaseAggregateArgs> = z.object({ orderBy: z.union([PurchaseOrderByWithRelationInputObjectSchema, PurchaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: PurchaseWhereInputObjectSchema.optional(), cursor: PurchaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PurchaseCountAggregateInputObjectSchema ]).optional(), _min: PurchaseMinAggregateInputObjectSchema.optional(), _max: PurchaseMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PurchaseAggregateArgs>;

export const PurchaseAggregateZodSchema = z.object({ orderBy: z.union([PurchaseOrderByWithRelationInputObjectSchema, PurchaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: PurchaseWhereInputObjectSchema.optional(), cursor: PurchaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PurchaseCountAggregateInputObjectSchema ]).optional(), _min: PurchaseMinAggregateInputObjectSchema.optional(), _max: PurchaseMaxAggregateInputObjectSchema.optional() }).strict();