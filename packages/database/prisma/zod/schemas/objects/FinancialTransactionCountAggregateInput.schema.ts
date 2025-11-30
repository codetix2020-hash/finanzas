import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  currency: z.literal(true).optional(),
  source: z.literal(true).optional(),
  metadata: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FinancialTransactionCountAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionCountAggregateInputType>;
export const FinancialTransactionCountAggregateInputObjectZodSchema = makeSchema();
