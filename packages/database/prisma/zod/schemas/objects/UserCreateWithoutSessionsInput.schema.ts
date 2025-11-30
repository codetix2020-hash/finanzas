import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { PasskeyCreateNestedManyWithoutUserInputObjectSchema as PasskeyCreateNestedManyWithoutUserInputObjectSchema } from './PasskeyCreateNestedManyWithoutUserInput.schema';
import { InvitationCreateNestedManyWithoutUserInputObjectSchema as InvitationCreateNestedManyWithoutUserInputObjectSchema } from './InvitationCreateNestedManyWithoutUserInput.schema';
import { PurchaseCreateNestedManyWithoutUserInputObjectSchema as PurchaseCreateNestedManyWithoutUserInputObjectSchema } from './PurchaseCreateNestedManyWithoutUserInput.schema';
import { MemberCreateNestedManyWithoutUserInputObjectSchema as MemberCreateNestedManyWithoutUserInputObjectSchema } from './MemberCreateNestedManyWithoutUserInput.schema';
import { TwoFactorCreateNestedManyWithoutUserInputObjectSchema as TwoFactorCreateNestedManyWithoutUserInputObjectSchema } from './TwoFactorCreateNestedManyWithoutUserInput.schema';
import { AiChatCreateNestedManyWithoutUserInputObjectSchema as AiChatCreateNestedManyWithoutUserInputObjectSchema } from './AiChatCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  username: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  banned: z.boolean().optional().nullable(),
  banReason: z.string().optional().nullable(),
  banExpires: z.coerce.date().optional().nullable(),
  onboardingComplete: z.boolean().optional(),
  paymentsCustomerId: z.string().optional().nullable(),
  locale: z.string().optional().nullable(),
  displayUsername: z.string().optional().nullable(),
  twoFactorEnabled: z.boolean().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  passkeys: z.lazy(() => PasskeyCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  purchases: z.lazy(() => PurchaseCreateNestedManyWithoutUserInputObjectSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutUserInputObjectSchema).optional(),
  twofactors: z.lazy(() => TwoFactorCreateNestedManyWithoutUserInputObjectSchema).optional(),
  aiChats: z.lazy(() => AiChatCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSessionsInput>;
export const UserCreateWithoutSessionsInputObjectZodSchema = makeSchema();
