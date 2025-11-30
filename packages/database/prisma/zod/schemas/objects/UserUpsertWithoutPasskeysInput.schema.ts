import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserUpdateWithoutPasskeysInputObjectSchema as UserUpdateWithoutPasskeysInputObjectSchema } from './UserUpdateWithoutPasskeysInput.schema';
import { UserUncheckedUpdateWithoutPasskeysInputObjectSchema as UserUncheckedUpdateWithoutPasskeysInputObjectSchema } from './UserUncheckedUpdateWithoutPasskeysInput.schema';
import { UserCreateWithoutPasskeysInputObjectSchema as UserCreateWithoutPasskeysInputObjectSchema } from './UserCreateWithoutPasskeysInput.schema';
import { UserUncheckedCreateWithoutPasskeysInputObjectSchema as UserUncheckedCreateWithoutPasskeysInputObjectSchema } from './UserUncheckedCreateWithoutPasskeysInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPasskeysInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPasskeysInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPasskeysInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPasskeysInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPasskeysInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPasskeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPasskeysInput>;
export const UserUpsertWithoutPasskeysInputObjectZodSchema = makeSchema();
