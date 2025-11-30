import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  customerId: z.literal(true).optional(),
  subscriptionId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const PurchaseMinAggregateInputObjectSchema: z.ZodType<Prisma.PurchaseMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseMinAggregateInputType>;
export const PurchaseMinAggregateInputObjectZodSchema = makeSchema();
