import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema';
import { EnumPurchaseTypeFieldUpdateOperationsInputObjectSchema as EnumPurchaseTypeFieldUpdateOperationsInputObjectSchema } from './EnumPurchaseTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OrganizationUpdateOneWithoutPurchasesNestedInputObjectSchema as OrganizationUpdateOneWithoutPurchasesNestedInputObjectSchema } from './OrganizationUpdateOneWithoutPurchasesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([PurchaseTypeSchema, z.lazy(() => EnumPurchaseTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  customerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  subscriptionId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  productId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutPurchasesNestedInputObjectSchema).optional()
}).strict();
export const PurchaseUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.PurchaseUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUpdateWithoutUserInput>;
export const PurchaseUpdateWithoutUserInputObjectZodSchema = makeSchema();
