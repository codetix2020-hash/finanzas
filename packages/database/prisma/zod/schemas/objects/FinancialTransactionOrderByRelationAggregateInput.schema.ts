import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FinancialTransactionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionOrderByRelationAggregateInput>;
export const FinancialTransactionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
