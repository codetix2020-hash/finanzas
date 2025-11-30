import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AIProviderSchema } from '../enums/AIProvider.schema';
import { NestedEnumAIProviderFilterObjectSchema as NestedEnumAIProviderFilterObjectSchema } from './NestedEnumAIProviderFilter.schema'

const makeSchema = () => z.object({
  equals: AIProviderSchema.optional(),
  in: AIProviderSchema.array().optional(),
  notIn: AIProviderSchema.array().optional(),
  not: z.union([AIProviderSchema, z.lazy(() => NestedEnumAIProviderFilterObjectSchema)]).optional()
}).strict();
export const EnumAIProviderFilterObjectSchema: z.ZodType<Prisma.EnumAIProviderFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAIProviderFilter>;
export const EnumAIProviderFilterObjectZodSchema = makeSchema();
