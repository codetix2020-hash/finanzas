import * as z from 'zod';
export const SessionDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  expiresAt: z.date(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  userId: z.string(),
  user: z.unknown(),
  impersonatedBy: z.string().optional(),
  activeOrganizationId: z.string().optional(),
  token: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));