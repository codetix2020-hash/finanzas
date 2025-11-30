import * as z from 'zod';
export const PurchaseAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    organization: z.number(),
    organizationId: z.number(),
    user: z.number(),
    userId: z.number(),
    type: z.number(),
    customerId: z.number(),
    subscriptionId: z.number(),
    productId: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    userId: z.string().nullable(),
    customerId: z.string().nullable(),
    subscriptionId: z.string().nullable(),
    productId: z.string().nullable(),
    status: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    userId: z.string().nullable(),
    customerId: z.string().nullable(),
    subscriptionId: z.string().nullable(),
    productId: z.string().nullable(),
    status: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});