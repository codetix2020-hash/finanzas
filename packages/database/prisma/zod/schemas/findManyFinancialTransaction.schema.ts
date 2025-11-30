import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionIncludeObjectSchema as FinancialTransactionIncludeObjectSchema } from './objects/FinancialTransactionInclude.schema';
import { FinancialTransactionOrderByWithRelationInputObjectSchema as FinancialTransactionOrderByWithRelationInputObjectSchema } from './objects/FinancialTransactionOrderByWithRelationInput.schema';
import { FinancialTransactionWhereInputObjectSchema as FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionScalarFieldEnumSchema } from './enums/FinancialTransactionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FinancialTransactionFindManySelectSchema: z.ZodType<Prisma.FinancialTransactionSelect> = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    currency: z.boolean().optional(),
    source: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionSelect>;

export const FinancialTransactionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    type: z.boolean().optional(),
    amount: z.boolean().optional(),
    currency: z.boolean().optional(),
    source: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const FinancialTransactionFindManySchema: z.ZodType<Prisma.FinancialTransactionFindManyArgs> = z.object({ select: FinancialTransactionFindManySelectSchema.optional(), include: z.lazy(() => FinancialTransactionIncludeObjectSchema.optional()), orderBy: z.union([FinancialTransactionOrderByWithRelationInputObjectSchema, FinancialTransactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: FinancialTransactionWhereInputObjectSchema.optional(), cursor: FinancialTransactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FinancialTransactionScalarFieldEnumSchema, FinancialTransactionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionFindManyArgs>;

export const FinancialTransactionFindManyZodSchema = z.object({ select: FinancialTransactionFindManySelectSchema.optional(), include: z.lazy(() => FinancialTransactionIncludeObjectSchema.optional()), orderBy: z.union([FinancialTransactionOrderByWithRelationInputObjectSchema, FinancialTransactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: FinancialTransactionWhereInputObjectSchema.optional(), cursor: FinancialTransactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FinancialTransactionScalarFieldEnumSchema, FinancialTransactionScalarFieldEnumSchema.array()]).optional() }).strict();