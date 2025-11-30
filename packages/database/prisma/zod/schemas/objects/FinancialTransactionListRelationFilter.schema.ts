import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionWhereInputObjectSchema as FinancialTransactionWhereInputObjectSchema } from './FinancialTransactionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FinancialTransactionWhereInputObjectSchema).optional(),
  some: z.lazy(() => FinancialTransactionWhereInputObjectSchema).optional(),
  none: z.lazy(() => FinancialTransactionWhereInputObjectSchema).optional()
}).strict();
export const FinancialTransactionListRelationFilterObjectSchema: z.ZodType<Prisma.FinancialTransactionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionListRelationFilter>;
export const FinancialTransactionListRelationFilterObjectZodSchema = makeSchema();
