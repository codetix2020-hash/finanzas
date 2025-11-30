import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema';
import { UserCreateNestedOneWithoutPurchasesInputObjectSchema as UserCreateNestedOneWithoutPurchasesInputObjectSchema } from './UserCreateNestedOneWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: PurchaseTypeSchema,
  customerId: z.string(),
  subscriptionId: z.string().optional().nullable(),
  productId: z.string(),
  status: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPurchasesInputObjectSchema).optional()
}).strict();
export const PurchaseCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.PurchaseCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateWithoutOrganizationInput>;
export const PurchaseCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
