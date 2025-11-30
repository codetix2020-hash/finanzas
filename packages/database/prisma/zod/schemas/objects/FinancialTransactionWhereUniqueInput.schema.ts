import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const FinancialTransactionWhereUniqueInputObjectSchema: z.ZodType<Prisma.FinancialTransactionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionWhereUniqueInput>;
export const FinancialTransactionWhereUniqueInputObjectZodSchema = makeSchema();
