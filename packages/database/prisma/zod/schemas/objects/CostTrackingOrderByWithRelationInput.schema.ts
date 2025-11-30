import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  provider: SortOrderSchema.optional(),
  requestId: SortOrderSchema.optional(),
  inputTokens: SortOrderSchema.optional(),
  outputTokens: SortOrderSchema.optional(),
  totalTokens: SortOrderSchema.optional(),
  estimatedCost: SortOrderSchema.optional(),
  endpoint: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CostTrackingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CostTrackingOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingOrderByWithRelationInput>;
export const CostTrackingOrderByWithRelationInputObjectZodSchema = makeSchema();
