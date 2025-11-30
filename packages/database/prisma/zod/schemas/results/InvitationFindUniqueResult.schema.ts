import * as z from 'zod';
export const InvitationFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  email: z.string(),
  role: z.string().optional(),
  status: z.string(),
  expiresAt: z.date(),
  inviterId: z.string(),
  user: z.unknown()
}));