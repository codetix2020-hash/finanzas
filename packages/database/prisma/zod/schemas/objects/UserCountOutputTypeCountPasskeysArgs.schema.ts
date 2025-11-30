import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyWhereInputObjectSchema as PasskeyWhereInputObjectSchema } from './PasskeyWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasskeyWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPasskeysArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPasskeysArgsObjectZodSchema = makeSchema();
