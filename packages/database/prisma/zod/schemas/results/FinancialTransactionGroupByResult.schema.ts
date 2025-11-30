import * as z from 'zod';
export const FinancialTransactionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  organizationId: z.string(),
  amount: z.number(),
  currency: z.string(),
  source: z.string(),
  metadata: z.unknown(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    organizationId: z.number(),
    organization: z.number(),
    type: z.number(),
    amount: z.number(),
    currency: z.number(),
    source: z.number(),
    metadata: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    amount: z.number().nullable(),
    currency: z.string().nullable(),
    source: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    amount: z.number().nullable(),
    currency: z.string().nullable(),
    source: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));