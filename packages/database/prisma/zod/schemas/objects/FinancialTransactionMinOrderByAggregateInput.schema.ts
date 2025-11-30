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
export const FinancialTransactionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionMinOrderByAggregateInput>;
export const FinancialTransactionMinOrderByAggregateInputObjectZodSchema = makeSchema();
