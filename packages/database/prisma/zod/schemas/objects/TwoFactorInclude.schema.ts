import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const TwoFactorIncludeObjectSchema: z.ZodType<Prisma.TwoFactorInclude> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorInclude>;
export const TwoFactorIncludeObjectZodSchema = makeSchema();
