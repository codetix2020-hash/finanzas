import * as z from 'zod';
import { Prisma } from '../../../generated/client';
import Decimal from 'decimal.js';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumAIProviderWithAggregatesFilterObjectSchema as EnumAIProviderWithAggregatesFilterObjectSchema } from './EnumAIProviderWithAggregatesFilter.schema';
import { AIProviderSchema } from '../enums/AIProvider.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const costtrackingscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CostTrackingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CostTrackingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CostTrackingScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CostTrackingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CostTrackingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => EnumAIProviderWithAggregatesFilterObjectSchema), AIProviderSchema]).optional(),
  requestId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  inputTokens: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  outputTokens: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  totalTokens: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  estimatedCost: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'estimatedCost' must be a Decimal",
})]).optional(),
  endpoint: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CostTrackingScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CostTrackingScalarWhereWithAggregatesInput> = costtrackingscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CostTrackingScalarWhereWithAggregatesInput>;
export const CostTrackingScalarWhereWithAggregatesInputObjectZodSchema = costtrackingscalarwherewithaggregatesinputSchema;
