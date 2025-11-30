import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseOrderByWithRelationInputObjectSchema as PurchaseOrderByWithRelationInputObjectSchema } from './objects/PurchaseOrderByWithRelationInput.schema';
import { PurchaseWhereInputObjectSchema as PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';
import { PurchaseCountAggregateInputObjectSchema as PurchaseCountAggregateInputObjectSchema } from './objects/PurchaseCountAggregateInput.schema';

export const PurchaseCountSchema: z.ZodType<Prisma.PurchaseCountArgs> = z.object({ orderBy: z.union([PurchaseOrderByWithRelationInputObjectSchema, PurchaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: PurchaseWhereInputObjectSchema.optional(), cursor: PurchaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PurchaseCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PurchaseCountArgs>;

export const PurchaseCountZodSchema = z.object({ orderBy: z.union([PurchaseOrderByWithRelationInputObjectSchema, PurchaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: PurchaseWhereInputObjectSchema.optional(), cursor: PurchaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PurchaseCountAggregateInputObjectSchema ]).optional() }).strict();