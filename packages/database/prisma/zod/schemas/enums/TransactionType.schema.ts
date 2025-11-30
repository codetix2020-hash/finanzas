import * as z from 'zod';

export const TransactionTypeSchema = z.enum(['REVENUE', 'COST_API_CLAUDE', 'COST_API_OPENAI', 'COST_STRIPE_FEE', 'COST_ADS'])

export type TransactionType = z.infer<typeof TransactionTypeSchema>;