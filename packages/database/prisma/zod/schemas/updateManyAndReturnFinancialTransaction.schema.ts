import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionSelectObjectSchema as FinancialTransactionSelectObjectSchema } from './objects/FinancialTransactionSelect.schema';
import { FinancialTransactionUpdateManyMutationInputObjectSchema as FinancialTransactionUpdateManyMutationInputObjectSchema } from './objects/FinancialTransactionUpdateManyMutationInput.schema';
import { FinancialTransactionWhereInputObjectSchema as FinancialTransactionWhereInputObjectSchema } from './objects/FinancialTransactionWhereInput.schema';

export const FinancialTransactionUpdateManyAndReturnSchema: z.ZodType<Prisma.FinancialTransactionUpdateManyAndReturnArgs> = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), data: FinancialTransactionUpdateManyMutationInputObjectSchema, where: FinancialTransactionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionUpdateManyAndReturnArgs>;

export const FinancialTransactionUpdateManyAndReturnZodSchema = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), data: FinancialTransactionUpdateManyMutationInputObjectSchema, where: FinancialTransactionWhereInputObjectSchema.optional() }).strict();