import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OrganizationUpdateOneRequiredWithoutMembersNestedInputObjectSchema as OrganizationUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './OrganizationUpdateOneRequiredWithoutMembersNestedInput.schema';
import { UserUpdateOneRequiredWithoutMembersNestedInputObjectSchema as UserUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutMembersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutMembersNestedInputObjectSchema).optional()
}).strict();
export const MemberUpdateInputObjectSchema: z.ZodType<Prisma.MemberUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateInput>;
export const MemberUpdateInputObjectZodSchema = makeSchema();
