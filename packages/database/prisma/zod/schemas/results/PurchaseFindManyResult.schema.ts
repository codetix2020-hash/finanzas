import * as z from 'zod';
export const PurchaseFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});