import * as z from 'zod';
export const AiChatFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  organizationId: z.string().optional(),
  organization: z.unknown().optional(),
  userId: z.string().optional(),
  user: z.unknown().optional(),
  title: z.string().optional(),
  messages: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});