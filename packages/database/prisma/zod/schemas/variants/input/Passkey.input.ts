import * as z from 'zod';
// prettier-ignore
export const PasskeyInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    publicKey: z.string(),
    userId: z.string(),
    user: z.unknown(),
    credentialID: z.string(),
    counter: z.number().int(),
    deviceType: z.string(),
    backedUp: z.boolean(),
    transports: z.string().optional().nullable(),
    aaguid: z.string().optional().nullable(),
    createdAt: z.date().optional().nullable()
}).strict();

export type PasskeyInputType = z.infer<typeof PasskeyInputSchema>;
