import * as z from 'zod';
export const FinancialTransactionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  type: z.unknown(),
  amount: z.number(),
  currency: z.string(),
  source: z.string(),
  metadata: z.unknown().optional(),
  createdAt: z.date()
}));