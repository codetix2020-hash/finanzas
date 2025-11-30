import * as z from 'zod';
import { PurchaseTypeSchema } from '../../enums/PurchaseType.schema';
// prettier-ignore
export const PurchaseModelSchema = z.object({
    id: z.string(),
    organization: z.unknown().nullable(),
    organizationId: z.string().nullable(),
    user: z.unknown().nullable(),
    userId: z.string().nullable(),
    type: PurchaseTypeSchema,
    customerId: z.string(),
    subscriptionId: z.string().nullable(),
    productId: z.string(),
    status: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PurchasePureType = z.infer<typeof PurchaseModelSchema>;
