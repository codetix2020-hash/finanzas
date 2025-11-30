import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId: z.string().optional().nullable(),
  type: PurchaseTypeSchema,
  customerId: z.string(),
  subscriptionId: z.string().optional().nullable(),
  productId: z.string(),
  status: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PurchaseUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PurchaseUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUncheckedCreateWithoutUserInput>;
export const PurchaseUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
