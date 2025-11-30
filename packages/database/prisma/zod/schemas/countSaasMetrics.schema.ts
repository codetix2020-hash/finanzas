import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsOrderByWithRelationInputObjectSchema as SaasMetricsOrderByWithRelationInputObjectSchema } from './objects/SaasMetricsOrderByWithRelationInput.schema';
import { SaasMetricsWhereInputObjectSchema as SaasMetricsWhereInputObjectSchema } from './objects/SaasMetricsWhereInput.schema';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './objects/SaasMetricsWhereUniqueInput.schema';
import { SaasMetricsCountAggregateInputObjectSchema as SaasMetricsCountAggregateInputObjectSchema } from './objects/SaasMetricsCountAggregateInput.schema';

export const SaasMetricsCountSchema: z.ZodType<Prisma.SaasMetricsCountArgs> = z.object({ orderBy: z.union([SaasMetricsOrderByWithRelationInputObjectSchema, SaasMetricsOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaasMetricsWhereInputObjectSchema.optional(), cursor: SaasMetricsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaasMetricsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SaasMetricsCountArgs>;

export const SaasMetricsCountZodSchema = z.object({ orderBy: z.union([SaasMetricsOrderByWithRelationInputObjectSchema, SaasMetricsOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaasMetricsWhereInputObjectSchema.optional(), cursor: SaasMetricsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SaasMetricsCountAggregateInputObjectSchema ]).optional() }).strict();