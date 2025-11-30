import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  emailVerified: z.literal(true).optional(),
  image: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  username: z.literal(true).optional(),
  role: z.literal(true).optional(),
  banned: z.literal(true).optional(),
  banReason: z.literal(true).optional(),
  banExpires: z.literal(true).optional(),
  onboardingComplete: z.literal(true).optional(),
  paymentsCustomerId: z.literal(true).optional(),
  locale: z.literal(true).optional(),
  displayUsername: z.literal(true).optional(),
  twoFactorEnabled: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserCountAggregateInputObjectSchema: z.ZodType<Prisma.UserCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserCountAggregateInputType>;
export const UserCountAggregateInputObjectZodSchema = makeSchema();
