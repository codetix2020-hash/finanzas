import * as z from 'zod';
import { Prisma } from '../../../generated/client';
import Decimal from 'decimal.js';
import { TransactionTypeSchema } from '../enums/TransactionType.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { OrganizationCreateNestedOneWithoutFinancialTransactionsInputObjectSchema as OrganizationCreateNestedOneWithoutFinancialTransactionsInputObjectSchema } from './OrganizationCreateNestedOneWithoutFinancialTransactionsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  type: TransactionTypeSchema,
  amount: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
}),
  currency: z.string().optional(),
  source: z.string(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutFinancialTransactionsInputObjectSchema)
}).strict();
export const FinancialTransactionCreateInputObjectSchema: z.ZodType<Prisma.FinancialTransactionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionCreateInput>;
export const FinancialTransactionCreateInputObjectZodSchema = makeSchema();
