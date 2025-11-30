import * as z from 'zod';
import { Prisma } from '../../../generated/client';
import Decimal from 'decimal.js';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAIProviderFilterObjectSchema as EnumAIProviderFilterObjectSchema } from './EnumAIProviderFilter.schema';
import { AIProviderSchema } from '../enums/AIProvider.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrganizationScalarRelationFilterObjectSchema as OrganizationScalarRelationFilterObjectSchema } from './OrganizationScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const costtrackingwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CostTrackingWhereInputObjectSchema), z.lazy(() => CostTrackingWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CostTrackingWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CostTrackingWhereInputObjectSchema), z.lazy(() => CostTrackingWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => EnumAIProviderFilterObjectSchema), AIProviderSchema]).optional(),
  requestId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inputTokens: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  outputTokens: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalTokens: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  estimatedCost: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'estimatedCost' must be a Decimal",
})]).optional(),
  endpoint: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  organization: z.union([z.lazy(() => OrganizationScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional()
}).strict();
export const CostTrackingWhereInputObjectSchema: z.ZodType<Prisma.CostTrackingWhereInput> = costtrackingwhereinputSchema as unknown as z.ZodType<Prisma.CostTrackingWhereInput>;
export const CostTrackingWhereInputObjectZodSchema = costtrackingwhereinputSchema;
