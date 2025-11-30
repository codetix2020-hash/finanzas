import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  backupCodes: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TwoFactorUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUpdateWithoutUserInput>;
export const TwoFactorUpdateWithoutUserInputObjectZodSchema = makeSchema();
