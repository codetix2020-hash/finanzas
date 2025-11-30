import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  source: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const FinancialTransactionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionMaxOrderByAggregateInput>;
export const FinancialTransactionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
