import * as z from 'zod';
export const SaasMetricsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  date: z.date(),
  mrr: z.number(),
  arr: z.number(),
  totalRevenue: z.number(),
  totalCosts: z.number(),
  netProfit: z.number(),
  roi: z.number(),
  apiCostsMTD: z.number(),
  adCostsMTD: z.number(),
  activeCustomers: z.number().int(),
  churnRate: z.number(),
  status: z.unknown(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});