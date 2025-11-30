import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  mrr: z.literal(true).optional(),
  arr: z.literal(true).optional(),
  totalRevenue: z.literal(true).optional(),
  totalCosts: z.literal(true).optional(),
  netProfit: z.literal(true).optional(),
  roi: z.literal(true).optional(),
  apiCostsMTD: z.literal(true).optional(),
  adCostsMTD: z.literal(true).optional(),
  activeCustomers: z.literal(true).optional(),
  churnRate: z.literal(true).optional()
}).strict();
export const SaasMetricsAvgAggregateInputObjectSchema: z.ZodType<Prisma.SaasMetricsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsAvgAggregateInputType>;
export const SaasMetricsAvgAggregateInputObjectZodSchema = makeSchema();
