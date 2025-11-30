import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  date: z.literal(true).optional(),
  mrr: z.literal(true).optional(),
  arr: z.literal(true).optional(),
  totalRevenue: z.literal(true).optional(),
  totalCosts: z.literal(true).optional(),
  netProfit: z.literal(true).optional(),
  roi: z.literal(true).optional(),
  apiCostsMTD: z.literal(true).optional(),
  adCostsMTD: z.literal(true).optional(),
  activeCustomers: z.literal(true).optional(),
  churnRate: z.literal(true).optional(),
  status: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SaasMetricsCountAggregateInputObjectSchema: z.ZodType<Prisma.SaasMetricsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsCountAggregateInputType>;
export const SaasMetricsCountAggregateInputObjectZodSchema = makeSchema();
