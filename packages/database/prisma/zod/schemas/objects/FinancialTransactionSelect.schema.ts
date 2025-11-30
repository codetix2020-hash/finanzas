import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  type: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  source: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const FinancialTransactionSelectObjectSchema: z.ZodType<Prisma.FinancialTransactionSelect> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionSelect>;
export const FinancialTransactionSelectObjectZodSchema = makeSchema();
