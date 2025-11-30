import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasStatusSchema } from '../enums/SaasStatus.schema'

const makeSchema = () => z.object({
  set: SaasStatusSchema.optional()
}).strict();
export const EnumSaasStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSaasStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSaasStatusFieldUpdateOperationsInput>;
export const EnumSaasStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
