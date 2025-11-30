import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const FinancialTransactionAvgAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionAvgAggregateInputType>;
export const FinancialTransactionAvgAggregateInputObjectZodSchema = makeSchema();
