import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    username: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
    banned: z.boolean().optional().nullable(),
    banReason: z.string().optional().nullable(),
    banExpires: z.date().optional().nullable(),
    onboardingComplete: z.boolean(),
    paymentsCustomerId: z.string().optional().nullable(),
    locale: z.string().optional().nullable(),
    displayUsername: z.string().optional().nullable(),
    twoFactorEnabled: z.boolean().optional().nullable(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    passkeys: z.array(z.unknown()),
    invitations: z.array(z.unknown()),
    purchases: z.array(z.unknown()),
    members: z.array(z.unknown()),
    twofactors: z.array(z.unknown()),
    aiChats: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
