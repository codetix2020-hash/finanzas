import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateWithoutTwofactorsInputObjectSchema as UserCreateWithoutTwofactorsInputObjectSchema } from './UserCreateWithoutTwofactorsInput.schema';
import { UserUncheckedCreateWithoutTwofactorsInputObjectSchema as UserUncheckedCreateWithoutTwofactorsInputObjectSchema } from './UserUncheckedCreateWithoutTwofactorsInput.schema';
import { UserCreateOrConnectWithoutTwofactorsInputObjectSchema as UserCreateOrConnectWithoutTwofactorsInputObjectSchema } from './UserCreateOrConnectWithoutTwofactorsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTwofactorsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTwofactorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTwofactorsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTwofactorsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTwofactorsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTwofactorsInput>;
export const UserCreateNestedOneWithoutTwofactorsInputObjectZodSchema = makeSchema();
