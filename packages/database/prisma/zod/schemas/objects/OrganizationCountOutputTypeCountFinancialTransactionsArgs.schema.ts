import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionWhereInputObjectSchema as FinancialTransactionWhereInputObjectSchema } from './FinancialTransactionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FinancialTransactionWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountFinancialTransactionsArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountFinancialTransactionsArgsObjectZodSchema = makeSchema();
