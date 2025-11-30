import * as z from 'zod';
export const MemberFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  userId: z.string(),
  user: z.unknown(),
  role: z.string(),
  createdAt: z.date()
}));