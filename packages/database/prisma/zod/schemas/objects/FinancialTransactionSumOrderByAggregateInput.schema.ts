import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional()
}).strict();
export const FinancialTransactionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionSumOrderByAggregateInput>;
export const FinancialTransactionSumOrderByAggregateInputObjectZodSchema = makeSchema();
