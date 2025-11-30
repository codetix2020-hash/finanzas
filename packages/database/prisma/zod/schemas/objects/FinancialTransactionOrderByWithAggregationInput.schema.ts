import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FinancialTransactionCountOrderByAggregateInputObjectSchema as FinancialTransactionCountOrderByAggregateInputObjectSchema } from './FinancialTransactionCountOrderByAggregateInput.schema';
import { FinancialTransactionAvgOrderByAggregateInputObjectSchema as FinancialTransactionAvgOrderByAggregateInputObjectSchema } from './FinancialTransactionAvgOrderByAggregateInput.schema';
import { FinancialTransactionMaxOrderByAggregateInputObjectSchema as FinancialTransactionMaxOrderByAggregateInputObjectSchema } from './FinancialTransactionMaxOrderByAggregateInput.schema';
import { FinancialTransactionMinOrderByAggregateInputObjectSchema as FinancialTransactionMinOrderByAggregateInputObjectSchema } from './FinancialTransactionMinOrderByAggregateInput.schema';
import { FinancialTransactionSumOrderByAggregateInputObjectSchema as FinancialTransactionSumOrderByAggregateInputObjectSchema } from './FinancialTransactionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  source: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => FinancialTransactionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FinancialTransactionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FinancialTransactionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FinancialTransactionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FinancialTransactionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FinancialTransactionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FinancialTransactionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionOrderByWithAggregationInput>;
export const FinancialTransactionOrderByWithAggregationInputObjectZodSchema = makeSchema();
