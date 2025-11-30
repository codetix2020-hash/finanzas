import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorWhereInputObjectSchema as TwoFactorWhereInputObjectSchema } from './TwoFactorWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TwoFactorWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountTwofactorsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountTwofactorsArgsObjectZodSchema = makeSchema();
