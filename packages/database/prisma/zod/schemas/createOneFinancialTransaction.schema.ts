import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionSelectObjectSchema as FinancialTransactionSelectObjectSchema } from './objects/FinancialTransactionSelect.schema';
import { FinancialTransactionIncludeObjectSchema as FinancialTransactionIncludeObjectSchema } from './objects/FinancialTransactionInclude.schema';
import { FinancialTransactionCreateInputObjectSchema as FinancialTransactionCreateInputObjectSchema } from './objects/FinancialTransactionCreateInput.schema';
import { FinancialTransactionUncheckedCreateInputObjectSchema as FinancialTransactionUncheckedCreateInputObjectSchema } from './objects/FinancialTransactionUncheckedCreateInput.schema';

export const FinancialTransactionCreateOneSchema: z.ZodType<Prisma.FinancialTransactionCreateArgs> = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), data: z.union([FinancialTransactionCreateInputObjectSchema, FinancialTransactionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionCreateArgs>;

export const FinancialTransactionCreateOneZodSchema = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), data: z.union([FinancialTransactionCreateInputObjectSchema, FinancialTransactionUncheckedCreateInputObjectSchema]) }).strict();