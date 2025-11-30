import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  mrr: SortOrderSchema.optional(),
  arr: SortOrderSchema.optional(),
  totalRevenue: SortOrderSchema.optional(),
  totalCosts: SortOrderSchema.optional(),
  netProfit: SortOrderSchema.optional(),
  roi: SortOrderSchema.optional(),
  apiCostsMTD: SortOrderSchema.optional(),
  adCostsMTD: SortOrderSchema.optional(),
  activeCustomers: SortOrderSchema.optional(),
  churnRate: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SaasMetricsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SaasMetricsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsMaxOrderByAggregateInput>;
export const SaasMetricsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
