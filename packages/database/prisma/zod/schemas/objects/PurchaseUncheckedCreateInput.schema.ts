import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseTypeSchema } from '../enums/PurchaseType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  type: PurchaseTypeSchema,
  customerId: z.string(),
  subscriptionId: z.string().optional().nullable(),
  productId: z.string(),
  status: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PurchaseUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PurchaseUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUncheckedCreateInput>;
export const PurchaseUncheckedCreateInputObjectZodSchema = makeSchema();
