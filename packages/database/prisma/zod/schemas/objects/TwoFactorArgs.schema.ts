import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorSelectObjectSchema as TwoFactorSelectObjectSchema } from './TwoFactorSelect.schema';
import { TwoFactorIncludeObjectSchema as TwoFactorIncludeObjectSchema } from './TwoFactorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TwoFactorSelectObjectSchema).optional(),
  include: z.lazy(() => TwoFactorIncludeObjectSchema).optional()
}).strict();
export const TwoFactorArgsObjectSchema = makeSchema();
export const TwoFactorArgsObjectZodSchema = makeSchema();
