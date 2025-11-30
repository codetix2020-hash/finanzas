import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { PasskeyFindManySchema as PasskeyFindManySchema } from '../findManyPasskey.schema';
import { InvitationFindManySchema as InvitationFindManySchema } from '../findManyInvitation.schema';
import { PurchaseFindManySchema as PurchaseFindManySchema } from '../findManyPurchase.schema';
import { MemberFindManySchema as MemberFindManySchema } from '../findManyMember.schema';
import { TwoFactorFindManySchema as TwoFactorFindManySchema } from '../findManyTwoFactor.schema';
import { AiChatFindManySchema as AiChatFindManySchema } from '../findManyAiChat.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  passkeys: z.union([z.boolean(), z.lazy(() => PasskeyFindManySchema)]).optional(),
  invitations: z.union([z.boolean(), z.lazy(() => InvitationFindManySchema)]).optional(),
  purchases: z.union([z.boolean(), z.lazy(() => PurchaseFindManySchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => MemberFindManySchema)]).optional(),
  twofactors: z.union([z.boolean(), z.lazy(() => TwoFactorFindManySchema)]).optional(),
  aiChats: z.union([z.boolean(), z.lazy(() => AiChatFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
