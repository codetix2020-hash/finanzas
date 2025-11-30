import * as z from 'zod';
// prettier-ignore
export const AiChatModelSchema = z.object({
    id: z.string(),
    organizationId: z.string().nullable(),
    organization: z.unknown().nullable(),
    userId: z.string().nullable(),
    user: z.unknown().nullable(),
    title: z.string().nullable(),
    messages: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AiChatPureType = z.infer<typeof AiChatModelSchema>;
