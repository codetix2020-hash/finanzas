import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AIProviderSchema } from '../enums/AIProvider.schema'

const nestedenumaiproviderfilterSchema = z.object({
  equals: AIProviderSchema.optional(),
  in: AIProviderSchema.array().optional(),
  notIn: AIProviderSchema.array().optional(),
  not: z.union([AIProviderSchema, z.lazy(() => NestedEnumAIProviderFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAIProviderFilterObjectSchema: z.ZodType<Prisma.NestedEnumAIProviderFilter> = nestedenumaiproviderfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAIProviderFilter>;
export const NestedEnumAIProviderFilterObjectZodSchema = nestedenumaiproviderfilterSchema;
