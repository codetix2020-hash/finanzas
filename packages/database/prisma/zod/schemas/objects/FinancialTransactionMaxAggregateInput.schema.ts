import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  currency: z.literal(true).optional(),
  source: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const FinancialTransactionMaxAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionMaxAggregateInputType>;
export const FinancialTransactionMaxAggregateInputObjectZodSchema = makeSchema();
