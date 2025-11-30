import * as z from 'zod';
// prettier-ignore
export const AiChatInputSchema = z.object({
    id: z.string(),
    organizationId: z.string().optional().nullable(),
    organization: z.unknown().optional().nullable(),
    userId: z.string().optional().nullable(),
    user: z.unknown().optional().nullable(),
    title: z.string().optional().nullable(),
    messages: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AiChatInputType = z.infer<typeof AiChatInputSchema>;
