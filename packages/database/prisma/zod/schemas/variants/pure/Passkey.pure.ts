import * as z from 'zod';
// prettier-ignore
export const PasskeyModelSchema = z.object({
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

export type PasskeyPureType = z.infer<typeof PasskeyModelSchema>;
