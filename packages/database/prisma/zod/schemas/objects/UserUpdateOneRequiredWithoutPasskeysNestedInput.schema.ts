import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateWithoutPasskeysInputObjectSchema as UserCreateWithoutPasskeysInputObjectSchema } from './UserCreateWithoutPasskeysInput.schema';
import { UserUncheckedCreateWithoutPasskeysInputObjectSchema as UserUncheckedCreateWithoutPasskeysInputObjectSchema } from './UserUncheckedCreateWithoutPasskeysInput.schema';
import { UserCreateOrConnectWithoutPasskeysInputObjectSchema as UserCreateOrConnectWithoutPasskeysInputObjectSchema } from './UserCreateOrConnectWithoutPasskeysInput.schema';
import { UserUpsertWithoutPasskeysInputObjectSchema as UserUpsertWithoutPasskeysInputObjectSchema } from './UserUpsertWithoutPasskeysInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPasskeysInputObjectSchema as UserUpdateToOneWithWhereWithoutPasskeysInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPasskeysInput.schema';
import { UserUpdateWithoutPasskeysInputObjectSchema as UserUpdateWithoutPasskeysInputObjectSchema } from './UserUpdateWithoutPasskeysInput.schema';
import { UserUncheckedUpdateWithoutPasskeysInputObjectSchema as UserUncheckedUpdateWithoutPasskeysInputObjectSchema } from './UserUncheckedUpdateWithoutPasskeysInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPasskeysInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPasskeysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPasskeysInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPasskeysInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPasskeysInputObjectSchema), z.lazy(() => UserUpdateWithoutPasskeysInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPasskeysInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPasskeysNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPasskeysNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPasskeysNestedInput>;
export const UserUpdateOneRequiredWithoutPasskeysNestedInputObjectZodSchema = makeSchema();
