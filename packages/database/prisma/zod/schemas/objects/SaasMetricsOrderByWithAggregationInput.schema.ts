import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SaasMetricsCountOrderByAggregateInputObjectSchema as SaasMetricsCountOrderByAggregateInputObjectSchema } from './SaasMetricsCountOrderByAggregateInput.schema';
import { SaasMetricsAvgOrderByAggregateInputObjectSchema as SaasMetricsAvgOrderByAggregateInputObjectSchema } from './SaasMetricsAvgOrderByAggregateInput.schema';
import { SaasMetricsMaxOrderByAggregateInputObjectSchema as SaasMetricsMaxOrderByAggregateInputObjectSchema } from './SaasMetricsMaxOrderByAggregateInput.schema';
import { SaasMetricsMinOrderByAggregateInputObjectSchema as SaasMetricsMinOrderByAggregateInputObjectSchema } from './SaasMetricsMinOrderByAggregateInput.schema';
import { SaasMetricsSumOrderByAggregateInputObjectSchema as SaasMetricsSumOrderByAggregateInputObjectSchema } from './SaasMetricsSumOrderByAggregateInput.schema'

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
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SaasMetricsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SaasMetricsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SaasMetricsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SaasMetricsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SaasMetricsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SaasMetricsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SaasMetricsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsOrderByWithAggregationInput>;
export const SaasMetricsOrderByWithAggregationInputObjectZodSchema = makeSchema();
