import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserUpdateWithoutTwofactorsInputObjectSchema as UserUpdateWithoutTwofactorsInputObjectSchema } from './UserUpdateWithoutTwofactorsInput.schema';
import { UserUncheckedUpdateWithoutTwofactorsInputObjectSchema as UserUncheckedUpdateWithoutTwofactorsInputObjectSchema } from './UserUncheckedUpdateWithoutTwofactorsInput.schema';
import { UserCreateWithoutTwofactorsInputObjectSchema as UserCreateWithoutTwofactorsInputObjectSchema } from './UserCreateWithoutTwofactorsInput.schema';
import { UserUncheckedCreateWithoutTwofactorsInputObjectSchema as UserUncheckedCreateWithoutTwofactorsInputObjectSchema } from './UserUncheckedCreateWithoutTwofactorsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTwofactorsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTwofactorsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTwofactorsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTwofactorsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTwofactorsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTwofactorsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTwofactorsInput>;
export const UserUpsertWithoutTwofactorsInputObjectZodSchema = makeSchema();
