import * as z from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    username: z.string().nullable(),
    role: z.string().nullable(),
    banned: z.boolean().nullable(),
    banReason: z.string().nullable(),
    banExpires: z.date().nullable(),
    onboardingComplete: z.boolean(),
    paymentsCustomerId: z.string().nullable(),
    locale: z.string().nullable(),
    displayUsername: z.string().nullable(),
    twoFactorEnabled: z.boolean().nullable(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    passkeys: z.array(z.unknown()),
    invitations: z.array(z.unknown()),
    purchases: z.array(z.unknown()),
    members: z.array(z.unknown()),
    twofactors: z.array(z.unknown()),
    aiChats: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
