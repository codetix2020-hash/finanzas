import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema'

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
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SaasMetricsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SaasMetricsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsOrderByWithRelationInput>;
export const SaasMetricsOrderByWithRelationInputObjectZodSchema = makeSchema();
