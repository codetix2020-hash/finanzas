import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountPasskeysArgsObjectSchema as UserCountOutputTypeCountPasskeysArgsObjectSchema } from './UserCountOutputTypeCountPasskeysArgs.schema';
import { UserCountOutputTypeCountInvitationsArgsObjectSchema as UserCountOutputTypeCountInvitationsArgsObjectSchema } from './UserCountOutputTypeCountInvitationsArgs.schema';
import { UserCountOutputTypeCountPurchasesArgsObjectSchema as UserCountOutputTypeCountPurchasesArgsObjectSchema } from './UserCountOutputTypeCountPurchasesArgs.schema';
import { UserCountOutputTypeCountMembersArgsObjectSchema as UserCountOutputTypeCountMembersArgsObjectSchema } from './UserCountOutputTypeCountMembersArgs.schema';
import { UserCountOutputTypeCountTwofactorsArgsObjectSchema as UserCountOutputTypeCountTwofactorsArgsObjectSchema } from './UserCountOutputTypeCountTwofactorsArgs.schema';
import { UserCountOutputTypeCountAiChatsArgsObjectSchema as UserCountOutputTypeCountAiChatsArgsObjectSchema } from './UserCountOutputTypeCountAiChatsArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  passkeys: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPasskeysArgsObjectSchema)]).optional(),
  invitations: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountInvitationsArgsObjectSchema)]).optional(),
  purchases: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPurchasesArgsObjectSchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountMembersArgsObjectSchema)]).optional(),
  twofactors: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTwofactorsArgsObjectSchema)]).optional(),
  aiChats: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAiChatsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
