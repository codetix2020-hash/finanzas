import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingIncludeObjectSchema as CostTrackingIncludeObjectSchema } from './objects/CostTrackingInclude.schema';
import { CostTrackingOrderByWithRelationInputObjectSchema as CostTrackingOrderByWithRelationInputObjectSchema } from './objects/CostTrackingOrderByWithRelationInput.schema';
import { CostTrackingWhereInputObjectSchema as CostTrackingWhereInputObjectSchema } from './objects/CostTrackingWhereInput.schema';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './objects/CostTrackingWhereUniqueInput.schema';
import { CostTrackingScalarFieldEnumSchema } from './enums/CostTrackingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CostTrackingFindManySelectSchema: z.ZodType<Prisma.CostTrackingSelect> = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    provider: z.boolean().optional(),
    requestId: z.boolean().optional(),
    inputTokens: z.boolean().optional(),
    outputTokens: z.boolean().optional(),
    totalTokens: z.boolean().optional(),
    estimatedCost: z.boolean().optional(),
    endpoint: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CostTrackingSelect>;

export const CostTrackingFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    provider: z.boolean().optional(),
    requestId: z.boolean().optional(),
    inputTokens: z.boolean().optional(),
    outputTokens: z.boolean().optional(),
    totalTokens: z.boolean().optional(),
    estimatedCost: z.boolean().optional(),
    endpoint: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const CostTrackingFindManySchema: z.ZodType<Prisma.CostTrackingFindManyArgs> = z.object({ select: CostTrackingFindManySelectSchema.optional(), include: z.lazy(() => CostTrackingIncludeObjectSchema.optional()), orderBy: z.union([CostTrackingOrderByWithRelationInputObjectSchema, CostTrackingOrderByWithRelationInputObjectSchema.array()]).optional(), where: CostTrackingWhereInputObjectSchema.optional(), cursor: CostTrackingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CostTrackingScalarFieldEnumSchema, CostTrackingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CostTrackingFindManyArgs>;

export const CostTrackingFindManyZodSchema = z.object({ select: CostTrackingFindManySelectSchema.optional(), include: z.lazy(() => CostTrackingIncludeObjectSchema.optional()), orderBy: z.union([CostTrackingOrderByWithRelationInputObjectSchema, CostTrackingOrderByWithRelationInputObjectSchema.array()]).optional(), where: CostTrackingWhereInputObjectSchema.optional(), cursor: CostTrackingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CostTrackingScalarFieldEnumSchema, CostTrackingScalarFieldEnumSchema.array()]).optional() }).strict();