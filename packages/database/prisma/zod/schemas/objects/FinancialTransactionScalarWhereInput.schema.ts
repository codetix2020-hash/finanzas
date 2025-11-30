import * as z from 'zod';
import { Prisma } from '../../../generated/client';
import Decimal from 'decimal.js';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTransactionTypeFilterObjectSchema as EnumTransactionTypeFilterObjectSchema } from './EnumTransactionTypeFilter.schema';
import { TransactionTypeSchema } from '../enums/TransactionType.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const financialtransactionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema), z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema), z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumTransactionTypeFilterObjectSchema), TransactionTypeSchema]).optional(),
  amount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'amount' must be a Decimal",
})]).optional(),
  currency: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  source: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FinancialTransactionScalarWhereInputObjectSchema: z.ZodType<Prisma.FinancialTransactionScalarWhereInput> = financialtransactionscalarwhereinputSchema as unknown as z.ZodType<Prisma.FinancialTransactionScalarWhereInput>;
export const FinancialTransactionScalarWhereInputObjectZodSchema = financialtransactionscalarwhereinputSchema;
