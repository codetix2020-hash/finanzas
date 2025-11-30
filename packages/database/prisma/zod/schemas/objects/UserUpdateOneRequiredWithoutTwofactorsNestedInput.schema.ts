import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateWithoutTwofactorsInputObjectSchema as UserCreateWithoutTwofactorsInputObjectSchema } from './UserCreateWithoutTwofactorsInput.schema';
import { UserUncheckedCreateWithoutTwofactorsInputObjectSchema as UserUncheckedCreateWithoutTwofactorsInputObjectSchema } from './UserUncheckedCreateWithoutTwofactorsInput.schema';
import { UserCreateOrConnectWithoutTwofactorsInputObjectSchema as UserCreateOrConnectWithoutTwofactorsInputObjectSchema } from './UserCreateOrConnectWithoutTwofactorsInput.schema';
import { UserUpsertWithoutTwofactorsInputObjectSchema as UserUpsertWithoutTwofactorsInputObjectSchema } from './UserUpsertWithoutTwofactorsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTwofactorsInputObjectSchema as UserUpdateToOneWithWhereWithoutTwofactorsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTwofactorsInput.schema';
import { UserUpdateWithoutTwofactorsInputObjectSchema as UserUpdateWithoutTwofactorsInputObjectSchema } from './UserUpdateWithoutTwofactorsInput.schema';
import { UserUncheckedUpdateWithoutTwofactorsInputObjectSchema as UserUncheckedUpdateWithoutTwofactorsInputObjectSchema } from './UserUncheckedUpdateWithoutTwofactorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTwofactorsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTwofactorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTwofactorsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTwofactorsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTwofactorsInputObjectSchema), z.lazy(() => UserUpdateWithoutTwofactorsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTwofactorsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTwofactorsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTwofactorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTwofactorsNestedInput>;
export const UserUpdateOneRequiredWithoutTwofactorsNestedInputObjectZodSchema = makeSchema();
