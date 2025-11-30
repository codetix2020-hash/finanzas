import * as z from 'zod';
// prettier-ignore
export const PasskeyResultSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    publicKey: z.string(),
    userId: z.string(),
    user: z.unknown(),
    credentialID: z.string(),
    counter: z.number().int(),
    deviceType: z.string(),
    backedUp: z.boolean(),
    transports: z.string().nullable(),
    aaguid: z.string().nullable(),
    createdAt: z.date().nullable()
}).strict();

export type PasskeyResultType = z.infer<typeof PasskeyResultSchema>;
