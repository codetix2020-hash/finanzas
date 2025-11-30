import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTwofactorsNestedInputObjectSchema as UserUpdateOneRequiredWithoutTwofactorsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTwofactorsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  backupCodes: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTwofactorsNestedInputObjectSchema).optional()
}).strict();
export const TwoFactorUpdateInputObjectSchema: z.ZodType<Prisma.TwoFactorUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUpdateInput>;
export const TwoFactorUpdateInputObjectZodSchema = makeSchema();
