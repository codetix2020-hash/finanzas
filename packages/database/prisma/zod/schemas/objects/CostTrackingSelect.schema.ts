import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  provider: z.boolean().optional(),
  requestId: z.boolean().optional(),
  inputTokens: z.boolean().optional(),
  outputTokens: z.boolean().optional(),
  totalTokens: z.boolean().optional(),
  estimatedCost: z.boolean().optional(),
  endpoint: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const CostTrackingSelectObjectSchema: z.ZodType<Prisma.CostTrackingSelect> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingSelect>;
export const CostTrackingSelectObjectZodSchema = makeSchema();
