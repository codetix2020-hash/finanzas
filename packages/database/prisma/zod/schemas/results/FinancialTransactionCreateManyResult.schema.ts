import * as z from 'zod';
export const FinancialTransactionCreateManyResultSchema = z.object({
  count: z.number()
});