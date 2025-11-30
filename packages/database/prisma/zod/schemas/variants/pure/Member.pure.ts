import * as z from 'zod';
// prettier-ignore
export const MemberModelSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    role: z.string(),
    createdAt: z.date()
}).strict();

export type MemberPureType = z.infer<typeof MemberModelSchema>;
