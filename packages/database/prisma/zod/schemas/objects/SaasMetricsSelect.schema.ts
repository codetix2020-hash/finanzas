import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  date: z.boolean().optional(),
  mrr: z.boolean().optional(),
  arr: z.boolean().optional(),
  totalRevenue: z.boolean().optional(),
  totalCosts: z.boolean().optional(),
  netProfit: z.boolean().optional(),
  roi: z.boolean().optional(),
  apiCostsMTD: z.boolean().optional(),
  adCostsMTD: z.boolean().optional(),
  activeCustomers: z.boolean().optional(),
  churnRate: z.boolean().optional(),
  status: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const SaasMetricsSelectObjectSchema: z.ZodType<Prisma.SaasMetricsSelect> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsSelect>;
export const SaasMetricsSelectObjectZodSchema = makeSchema();
