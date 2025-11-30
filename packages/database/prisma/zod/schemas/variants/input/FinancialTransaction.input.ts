import * as z from 'zod';
import { TransactionTypeSchema } from '../../enums/TransactionType.schema';
// prettier-ignore
export const FinancialTransactionInputSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    type: TransactionTypeSchema,
    amount: z.number(),
    currency: z.string(),
    source: z.string(),
    metadata: z.unknown().optional().nullable(),
    createdAt: z.date()
}).strict();

export type FinancialTransactionInputType = z.infer<typeof FinancialTransactionInputSchema>;
