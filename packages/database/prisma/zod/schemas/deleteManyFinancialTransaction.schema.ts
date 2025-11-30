import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionWhereInputObjectSchema as FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';

export const FinancialTransactionDeleteManySchema: z.ZodType<Prisma.FinancialTransactionDeleteManyArgs> = z.object({ where: FinancialTransactionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionDeleteManyArgs>;

export const FinancialTransactionDeleteManyZodSchema = z.object({ where: FinancialTransactionWhereInputObjectSchema.optional() }).strict();