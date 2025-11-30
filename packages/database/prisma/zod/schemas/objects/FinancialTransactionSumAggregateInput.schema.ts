import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const FinancialTransactionSumAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionSumAggregateInputType>;
export const FinancialTransactionSumAggregateInputObjectZodSchema = makeSchema();
