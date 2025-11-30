import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  username: z.string().optional(),
  role: z.string().optional(),
  banned: z.boolean().optional(),
  banReason: z.string().optional(),
  banExpires: z.date().optional(),
  onboardingComplete: z.boolean(),
  paymentsCustomerId: z.string().optional(),
  locale: z.string().optional(),
  displayUsername: z.string().optional(),
  twoFactorEnabled: z.boolean().optional(),
  sessions: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  passkeys: z.array(z.unknown()),
  invitations: z.array(z.unknown()),
  purchases: z.array(z.unknown()),
  members: z.array(z.unknown()),
  twofactors: z.array(z.unknown()),
  aiChats: z.array(z.unknown())
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