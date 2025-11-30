import * as z from 'zod';
export const AiChatDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  organizationId: z.string().optional(),
  organization: z.unknown().optional(),
  userId: z.string().optional(),
  user: z.unknown().optional(),
  title: z.string().optional(),
  messages: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));