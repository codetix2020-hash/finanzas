import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AIProviderSchema } from '../enums/AIProvider.schema'

const makeSchema = () => z.object({
  set: AIProviderSchema.optional()
}).strict();
export const EnumAIProviderFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAIProviderFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumAIProviderFieldUpdateOperationsInput>;
export const EnumAIProviderFieldUpdateOperationsInputObjectZodSchema = makeSchema();
