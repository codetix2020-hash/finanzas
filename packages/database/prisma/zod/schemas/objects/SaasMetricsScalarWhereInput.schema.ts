import * as z from 'zod';
import { Prisma } from '../../../generated/client';
import Decimal from 'decimal.js';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumSaasStatusFilterObjectSchema as EnumSaasStatusFilterObjectSchema } from './EnumSaasStatusFilter.schema';
import { SaasStatusSchema } from '../enums/SaasStatus.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const saasmetricsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SaasMetricsScalarWhereInputObjectSchema), z.lazy(() => SaasMetricsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SaasMetricsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SaasMetricsScalarWhereInputObjectSchema), z.lazy(() => SaasMetricsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  mrr: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'mrr' must be a Decimal",
})]).optional(),
  arr: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'arr' must be a Decimal",
})]).optional(),
  totalRevenue: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'totalRevenue' must be a Decimal",
})]).optional(),
  totalCosts: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'totalCosts' must be a Decimal",
})]).optional(),
  netProfit: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'netProfit' must be a Decimal",
})]).optional(),
  roi: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  apiCostsMTD: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'apiCostsMTD' must be a Decimal",
})]).optional(),
  adCostsMTD: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'adCostsMTD' must be a Decimal",
})]).optional(),
  activeCustomers: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  churnRate: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  status: z.union([z.lazy(() => EnumSaasStatusFilterObjectSchema), SaasStatusSchema]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SaasMetricsScalarWhereInputObjectSchema: z.ZodType<Prisma.SaasMetricsScalarWhereInput> = saasmetricsscalarwhereinputSchema as unknown as z.ZodType<Prisma.SaasMetricsScalarWhereInput>;
export const SaasMetricsScalarWhereInputObjectZodSchema = saasmetricsscalarwhereinputSchema;
