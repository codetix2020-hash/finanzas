import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionSelectObjectSchema as FinancialTransactionSelectObjectSchema } from './objects/FinancialTransactionSelect.schema';
import { FinancialTransactionCreateManyInputObjectSchema as FinancialTransactionCreateManyInputObjectSchema } from './objects/FinancialTransactionCreateManyInput.schema';

export const FinancialTransactionCreateManyAndReturnSchema: z.ZodType<Prisma.FinancialTransactionCreateManyAndReturnArgs> = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), data: z.union([ FinancialTransactionCreateManyInputObjectSchema, z.array(FinancialTransactionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionCreateManyAndReturnArgs>;

export const FinancialTransactionCreateManyAndReturnZodSchema = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), data: z.union([ FinancialTransactionCreateManyInputObjectSchema, z.array(FinancialTransactionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();