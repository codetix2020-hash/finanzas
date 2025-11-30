import * as z from 'zod';

export const SaasMetricsScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'date', 'mrr', 'arr', 'totalRevenue', 'totalCosts', 'netProfit', 'roi', 'apiCostsMTD', 'adCostsMTD', 'activeCustomers', 'churnRate', 'status', 'updatedAt'])

export type SaasMetricsScalarFieldEnum = z.infer<typeof SaasMetricsScalarFieldEnumSchema>;