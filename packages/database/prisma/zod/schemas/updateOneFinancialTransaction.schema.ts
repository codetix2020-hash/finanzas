import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionSelectObjectSchema as FinancialTransactionSelectObjectSchema } from './objects/FinancialTransactionSelect.schema';
import { FinancialTransactionIncludeObjectSchema as FinancialTransactionIncludeObjectSchema } from './objects/FinancialTransactionInclude.schema';
import { FinancialTransactionUpdateInputObjectSchema as FinancialTransactionUpdateInputObjectSchema } from './objects/FinancialTransactionUpdateInput.schema';
import { FinancialTransactionUncheckedUpdateInputObjectSchema as FinancialTransactionUncheckedUpdateInputObjectSchema } from './objects/FinancialTransactionUncheckedUpdateInput.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';

export const FinancialTransactionUpdateOneSchema: z.ZodType<Prisma.FinancialTransactionUpdateArgs> = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), data: z.union([FinancialTransactionUpdateInputObjectSchema, FinancialTransactionUncheckedUpdateInputObjectSchema]), where: FinancialTransactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionUpdateArgs>;

export const FinancialTransactionUpdateOneZodSchema = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), data: z.union([FinancialTransactionUpdateInputObjectSchema, FinancialTransactionUncheckedUpdateInputObjectSchema]), where: FinancialTransactionWhereUniqueInputObjectSchema }).strict();