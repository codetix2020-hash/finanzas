import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeySelectObjectSchema as PasskeySelectObjectSchema } from './PasskeySelect.schema';
import { PasskeyIncludeObjectSchema as PasskeyIncludeObjectSchema } from './PasskeyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PasskeySelectObjectSchema).optional(),
  include: z.lazy(() => PasskeyIncludeObjectSchema).optional()
}).strict();
export const PasskeyArgsObjectSchema = makeSchema();
export const PasskeyArgsObjectZodSchema = makeSchema();
