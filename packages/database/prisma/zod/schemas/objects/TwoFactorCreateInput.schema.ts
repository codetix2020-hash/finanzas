import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateNestedOneWithoutTwofactorsInputObjectSchema as UserCreateNestedOneWithoutTwofactorsInputObjectSchema } from './UserCreateNestedOneWithoutTwofactorsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  secret: z.string(),
  backupCodes: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutTwofactorsInputObjectSchema)
}).strict();
export const TwoFactorCreateInputObjectSchema: z.ZodType<Prisma.TwoFactorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCreateInput>;
export const TwoFactorCreateInputObjectZodSchema = makeSchema();
