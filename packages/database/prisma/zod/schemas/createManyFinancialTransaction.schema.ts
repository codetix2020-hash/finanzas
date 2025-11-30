import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionCreateManyInputObjectSchema as FinancialTransactionCreateManyInputObjectSchema } from './objects/FinancialTransactionCreateManyInput.schema';

export const FinancialTransactionCreateManySchema: z.ZodType<Prisma.FinancialTransactionCreateManyArgs> = z.object({ data: z.union([ FinancialTransactionCreateManyInputObjectSchema, z.array(FinancialTransactionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionCreateManyArgs>;

export const FinancialTransactionCreateManyZodSchema = z.object({ data: z.union([ FinancialTransactionCreateManyInputObjectSchema, z.array(FinancialTransactionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();