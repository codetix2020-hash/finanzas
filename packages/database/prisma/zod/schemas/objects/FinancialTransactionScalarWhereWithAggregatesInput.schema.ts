import * as z from 'zod';
import { Prisma } from '../../../generated/client';
import Decimal from 'decimal.js';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumTransactionTypeWithAggregatesFilterObjectSchema as EnumTransactionTypeWithAggregatesFilterObjectSchema } from './EnumTransactionTypeWithAggregatesFilter.schema';
import { TransactionTypeSchema } from '../enums/TransactionType.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const financialtransactionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FinancialTransactionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FinancialTransactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FinancialTransactionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FinancialTransactionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FinancialTransactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumTransactionTypeWithAggregatesFilterObjectSchema), TransactionTypeSchema]).optional(),
  amount: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
})]).optional(),
  currency: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  source: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FinancialTransactionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FinancialTransactionScalarWhereWithAggregatesInput> = financialtransactionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FinancialTransactionScalarWhereWithAggregatesInput>;
export const FinancialTransactionScalarWhereWithAggregatesInputObjectZodSchema = financialtransactionscalarwherewithaggregatesinputSchema;
