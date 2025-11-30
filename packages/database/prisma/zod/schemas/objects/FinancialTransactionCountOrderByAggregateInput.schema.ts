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
  metadata: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const FinancialTransactionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionCountOrderByAggregateInput>;
export const FinancialTransactionCountOrderByAggregateInputObjectZodSchema = makeSchema();
