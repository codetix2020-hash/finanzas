import * as z from 'zod';
// prettier-ignore
export const InvitationModelSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    email: z.string(),
    role: z.string().nullable(),
    status: z.string(),
    expiresAt: z.date(),
    inviterId: z.string(),
    user: z.unknown()
}).strict();

export type InvitationPureType = z.infer<typeof InvitationModelSchema>;
