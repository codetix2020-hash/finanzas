import * as z from 'zod';

export const FinancialTransactionScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'type', 'amount', 'currency', 'source', 'metadata', 'createdAt'])

export type FinancialTransactionScalarFieldEnum = z.infer<typeof FinancialTransactionScalarFieldEnumSchema>;