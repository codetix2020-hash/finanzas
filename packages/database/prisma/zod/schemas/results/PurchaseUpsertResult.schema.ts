import * as z from 'zod';
export const PurchaseUpsertResultSchema = z.object({
  id: z.string(),
  organization: z.unknown().optional(),
  organizationId: z.string().optional(),
  user: z.unknown().optional(),
  userId: z.string().optional(),
  type: z.unknown(),
  customerId: z.string(),
  subscriptionId: z.string().optional(),
  productId: z.string(),
  status: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});