import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema';
import { OrganizationCreateNestedOneWithoutPurchasesInputObjectSchema as OrganizationCreateNestedOneWithoutPurchasesInputObjectSchema } from './OrganizationCreateNestedOneWithoutPurchasesInput.schema';
import { UserCreateNestedOneWithoutPurchasesInputObjectSchema as UserCreateNestedOneWithoutPurchasesInputObjectSchema } from './UserCreateNestedOneWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: PurchaseTypeSchema,
  customerId: z.string(),
  subscriptionId: z.string().optional().nullable(),
  productId: z.string(),
  status: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutPurchasesInputObjectSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPurchasesInputObjectSchema).optional()
}).strict();
export const PurchaseCreateInputObjectSchema: z.ZodType<Prisma.PurchaseCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateInput>;
export const PurchaseCreateInputObjectZodSchema = makeSchema();
