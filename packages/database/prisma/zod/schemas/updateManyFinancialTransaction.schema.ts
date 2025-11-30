import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionUpdateManyMutationInputObjectSchema as FinancialTransactionUpdateManyMutationInputObjectSchema } from './objects/FinancialTransactionUpdateManyMutationInput.schema';
import { FinancialTransactionWhereInputObjectSchema as FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';

export const FinancialTransactionUpdateManySchema: z.ZodType<Prisma.FinancialTransactionUpdateManyArgs> = z.object({ data: FinancialTransactionUpdateManyMutationInputObjectSchema, where: FinancialTransactionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionUpdateManyArgs>;

export const FinancialTransactionUpdateManyZodSchema = z.object({ data: FinancialTransactionUpdateManyMutationInputObjectSchema, where: FinancialTransactionWhereInputObjectSchema.optional() }).strict();