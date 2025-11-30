import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  backupCodes: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TwoFactorUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.TwoFactorUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUncheckedUpdateManyInput>;
export const TwoFactorUncheckedUpdateManyInputObjectZodSchema = makeSchema();
