import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionSelectObjectSchema as FinancialTransactionSelectObjectSchema } from './objects/FinancialTransactionSelect.schema';
import { FinancialTransactionIncludeObjectSchema as FinancialTransactionIncludeObjectSchema } from './objects/FinancialTransactionInclude.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';

export const FinancialTransactionFindUniqueSchema: z.ZodType<Prisma.FinancialTransactionFindUniqueArgs> = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), where: FinancialTransactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionFindUniqueArgs>;

export const FinancialTransactionFindUniqueZodSchema = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), where: FinancialTransactionWhereUniqueInputObjectSchema }).strict();