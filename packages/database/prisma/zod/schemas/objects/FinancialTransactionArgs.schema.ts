import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionSelectObjectSchema as FinancialTransactionSelectObjectSchema } from './FinancialTransactionSelect.schema';
import { FinancialTransactionIncludeObjectSchema as FinancialTransactionIncludeObjectSchema } from './FinancialTransactionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FinancialTransactionSelectObjectSchema).optional(),
  include: z.lazy(() => FinancialTransactionIncludeObjectSchema).optional()
}).strict();
export const FinancialTransactionArgsObjectSchema = makeSchema();
export const FinancialTransactionArgsObjectZodSchema = makeSchema();
