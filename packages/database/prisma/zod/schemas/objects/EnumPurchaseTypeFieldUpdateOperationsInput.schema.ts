import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema'

const makeSchema = () => z.object({
  set: PurchaseTypeSchema.optional()
}).strict();
export const EnumPurchaseTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPurchaseTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumPurchaseTypeFieldUpdateOperationsInput>;
export const EnumPurchaseTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
