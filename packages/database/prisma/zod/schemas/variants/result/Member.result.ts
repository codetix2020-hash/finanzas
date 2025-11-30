import * as z from 'zod';
// prettier-ignore
export const MemberResultSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    role: z.string(),
    createdAt: z.date()
}).strict();

export type MemberResultType = z.infer<typeof MemberResultSchema>;
