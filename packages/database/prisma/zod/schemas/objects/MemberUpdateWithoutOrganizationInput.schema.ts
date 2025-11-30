import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutMembersNestedInputObjectSchema as UserUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutMembersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional()
}).strict();
export const MemberUpdateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.MemberUpdateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateWithoutOrganizationInput>;
export const MemberUpdateWithoutOrganizationInputObjectZodSchema = makeSchema();
