import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  secret: z.boolean().optional(),
  backupCodes: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const TwoFactorSelectObjectSchema: z.ZodType<Prisma.TwoFactorSelect> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorSelect>;
export const TwoFactorSelectObjectZodSchema = makeSchema();
