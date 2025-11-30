import * as z from 'zod';
import { SaasStatusSchema } from '../../enums/SaasStatus.schema';
// prettier-ignore
export const SaasMetricsModelSchema = z.object({
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
    status: SaasStatusSchema,
    updatedAt: z.date()
}).strict();

export type SaasMetricsPureType = z.infer<typeof SaasMetricsModelSchema>;
