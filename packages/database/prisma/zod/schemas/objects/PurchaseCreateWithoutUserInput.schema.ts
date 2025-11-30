import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema';
import { OrganizationCreateNestedOneWithoutPurchasesInputObjectSchema as OrganizationCreateNestedOneWithoutPurchasesInputObjectSchema } from './OrganizationCreateNestedOneWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: PurchaseTypeSchema,
  customerId: z.string(),
  subscriptionId: z.string().optional().nullable(),
  productId: z.string(),
  status: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutPurchasesInputObjectSchema).optional()
}).strict();
export const PurchaseCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PurchaseCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateWithoutUserInput>;
export const PurchaseCreateWithoutUserInputObjectZodSchema = makeSchema();
