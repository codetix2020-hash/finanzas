import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsIncludeObjectSchema as SaasMetricsIncludeObjectSchema } from './objects/SaasMetricsInclude.schema';
import { SaasMetricsOrderByWithRelationInputObjectSchema as SaasMetricsOrderByWithRelationInputObjectSchema } from './objects/SaasMetricsOrderByWithRelationInput.schema';
import { SaasMetricsWhereInputObjectSchema as SaasMetricsWhereInputObjectSchema } from './objects/SaasMetricsWhereInput.schema';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './objects/SaasMetricsWhereUniqueInput.schema';
import { SaasMetricsScalarFieldEnumSchema } from './enums/SaasMetricsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SaasMetricsFindFirstSelectSchema: z.ZodType<Prisma.SaasMetricsSelect> = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    date: z.boolean().optional(),
    mrr: z.boolean().optional(),
    arr: z.boolean().optional(),
    totalRevenue: z.boolean().optional(),
    totalCosts: z.boolean().optional(),
    netProfit: z.boolean().optional(),
    roi: z.boolean().optional(),
    apiCostsMTD: z.boolean().optional(),
    adCostsMTD: z.boolean().optional(),
    activeCustomers: z.boolean().optional(),
    churnRate: z.boolean().optional(),
    status: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SaasMetricsSelect>;

export const SaasMetricsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    date: z.boolean().optional(),
    mrr: z.boolean().optional(),
    arr: z.boolean().optional(),
    totalRevenue: z.boolean().optional(),
    totalCosts: z.boolean().optional(),
    netProfit: z.boolean().optional(),
    roi: z.boolean().optional(),
    apiCostsMTD: z.boolean().optional(),
    adCostsMTD: z.boolean().optional(),
    activeCustomers: z.boolean().optional(),
    churnRate: z.boolean().optional(),
    status: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const SaasMetricsFindFirstSchema: z.ZodType<Prisma.SaasMetricsFindFirstArgs> = z.object({ select: SaasMetricsFindFirstSelectSchema.optional(), include: z.lazy(() => SaasMetricsIncludeObjectSchema.optional()), orderBy: z.union([SaasMetricsOrderByWithRelationInputObjectSchema, SaasMetricsOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaasMetricsWhereInputObjectSchema.optional(), cursor: SaasMetricsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaasMetricsScalarFieldEnumSchema, SaasMetricsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SaasMetricsFindFirstArgs>;

export const SaasMetricsFindFirstZodSchema = z.object({ select: SaasMetricsFindFirstSelectSchema.optional(), include: z.lazy(() => SaasMetricsIncludeObjectSchema.optional()), orderBy: z.union([SaasMetricsOrderByWithRelationInputObjectSchema, SaasMetricsOrderByWithRelationInputObjectSchema.array()]).optional(), where: SaasMetricsWhereInputObjectSchema.optional(), cursor: SaasMetricsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SaasMetricsScalarFieldEnumSchema, SaasMetricsScalarFieldEnumSchema.array()]).optional() }).strict();