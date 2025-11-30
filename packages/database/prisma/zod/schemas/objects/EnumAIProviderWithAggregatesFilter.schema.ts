import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AIProviderSchema } from '../enums/AIProvider.schema';
import { NestedEnumAIProviderWithAggregatesFilterObjectSchema as NestedEnumAIProviderWithAggregatesFilterObjectSchema } from './NestedEnumAIProviderWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAIProviderFilterObjectSchema as NestedEnumAIProviderFilterObjectSchema } from './NestedEnumAIProviderFilter.schema'

const makeSchema = () => z.object({
  equals: AIProviderSchema.optional(),
  in: AIProviderSchema.array().optional(),
  notIn: AIProviderSchema.array().optional(),
  not: z.union([AIProviderSchema, z.lazy(() => NestedEnumAIProviderWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAIProviderFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAIProviderFilterObjectSchema).optional()
}).strict();
export const EnumAIProviderWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAIProviderWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAIProviderWithAggregatesFilter>;
export const EnumAIProviderWithAggregatesFilterObjectZodSchema = makeSchema();
