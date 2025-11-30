import * as z from 'zod';
import { Prisma } from '../../../generated/client';
import Decimal from 'decimal.js';
import { AIProviderSchema } from '../enums/AIProvider.schema';
import { OrganizationCreateNestedOneWithoutCostTrackingsInputObjectSchema as OrganizationCreateNestedOneWithoutCostTrackingsInputObjectSchema } from './OrganizationCreateNestedOneWithoutCostTrackingsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  provider: AIProviderSchema,
  requestId: z.string(),
  inputTokens: z.number().int(),
  outputTokens: z.number().int(),
  totalTokens: z.number().int(),
  estimatedCost: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'estimatedCost' must be a Decimal",
}),
  endpoint: z.string(),
  createdAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutCostTrackingsInputObjectSchema)
}).strict();
export const CostTrackingCreateInputObjectSchema: z.ZodType<Prisma.CostTrackingCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingCreateInput>;
export const CostTrackingCreateInputObjectZodSchema = makeSchema();
