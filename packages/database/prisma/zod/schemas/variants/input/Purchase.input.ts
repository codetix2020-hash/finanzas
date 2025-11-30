import * as z from 'zod';
import { PurchaseTypeSchema } from '../../enums/PurchaseType.schema';
// prettier-ignore
export const PurchaseInputSchema = z.object({
    id: z.string(),
    organization: z.unknown().optional().nullable(),
    organizationId: z.string().optional().nullable(),
    user: z.unknown().optional().nullable(),
    userId: z.string().optional().nullable(),
    type: PurchaseTypeSchema,
    customerId: z.string(),
    subscriptionId: z.string().optional().nullable(),
    productId: z.string(),
    status: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PurchaseInputType = z.infer<typeof PurchaseInputSchema>;
