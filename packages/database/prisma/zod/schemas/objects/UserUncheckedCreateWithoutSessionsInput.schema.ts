import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { PasskeyUncheckedCreateNestedManyWithoutUserInputObjectSchema as PasskeyUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PasskeyUncheckedCreateNestedManyWithoutUserInput.schema';
import { InvitationUncheckedCreateNestedManyWithoutUserInputObjectSchema as InvitationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutUserInput.schema';
import { PurchaseUncheckedCreateNestedManyWithoutUserInputObjectSchema as PurchaseUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateNestedManyWithoutUserInput.schema';
import { MemberUncheckedCreateNestedManyWithoutUserInputObjectSchema as MemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutUserInput.schema';
import { TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectSchema as TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TwoFactorUncheckedCreateNestedManyWithoutUserInput.schema';
import { AiChatUncheckedCreateNestedManyWithoutUserInputObjectSchema as AiChatUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AiChatUncheckedCreateNestedManyWithoutUserInput.schema'

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
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  passkeys: z.lazy(() => PasskeyUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  purchases: z.lazy(() => PurchaseUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  twofactors: z.lazy(() => TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  aiChats: z.lazy(() => AiChatUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput>;
export const UserUncheckedCreateWithoutSessionsInputObjectZodSchema = makeSchema();
