import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  mrr: SortOrderSchema.optional(),
  arr: SortOrderSchema.optional(),
  totalRevenue: SortOrderSchema.optional(),
  totalCosts: SortOrderSchema.optional(),
  netProfit: SortOrderSchema.optional(),
  roi: SortOrderSchema.optional(),
  apiCostsMTD: SortOrderSchema.optional(),
  adCostsMTD: SortOrderSchema.optional(),
  activeCustomers: SortOrderSchema.optional(),
  churnRate: SortOrderSchema.optional()
}).strict();
export const SaasMetricsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaasMetricsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsAvgOrderByAggregateInput>;
export const SaasMetricsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
