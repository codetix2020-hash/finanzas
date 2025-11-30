import * as z from 'zod';
// prettier-ignore
export const MemberInputSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    role: z.string(),
    createdAt: z.date()
}).strict();

export type MemberInputType = z.infer<typeof MemberInputSchema>;
