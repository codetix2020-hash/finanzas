import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionSelectObjectSchema as FinancialTransactionSelectObjectSchema } from './objects/FinancialTransactionSelect.schema';
import { FinancialTransactionIncludeObjectSchema as FinancialTransactionIncludeObjectSchema } from './objects/FinancialTransactionInclude.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';

export const FinancialTransactionDeleteOneSchema: z.ZodType<Prisma.FinancialTransactionDeleteArgs> = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), where: FinancialTransactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionDeleteArgs>;

export const FinancialTransactionDeleteOneZodSchema = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), where: FinancialTransactionWhereUniqueInputObjectSchema }).strict();