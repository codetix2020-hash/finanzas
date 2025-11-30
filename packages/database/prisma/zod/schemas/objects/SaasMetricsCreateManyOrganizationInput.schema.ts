import * as z from 'zod';
import { Prisma } from '../../../generated/client';
import Decimal from 'decimal.js';
import { SaasStatusSchema } from '../enums/SaasStatus.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  mrr: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'mrr' must be a Decimal",
}),
  arr: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'arr' must be a Decimal",
}),
  totalRevenue: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'totalRevenue' must be a Decimal",
}),
  totalCosts: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'totalCosts' must be a Decimal",
}),
  netProfit: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'netProfit' must be a Decimal",
}),
  roi: z.number(),
  apiCostsMTD: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'apiCostsMTD' must be a Decimal",
}),
  adCostsMTD: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'adCostsMTD' must be a Decimal",
}),
  activeCustomers: z.number().int(),
  churnRate: z.number(),
  status: SaasStatusSchema,
  updatedAt: z.coerce.date().optional()
}).strict();
export const SaasMetricsCreateManyOrganizationInputObjectSchema: z.ZodType<Prisma.SaasMetricsCreateManyOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsCreateManyOrganizationInput>;
export const SaasMetricsCreateManyOrganizationInputObjectZodSchema = makeSchema();
