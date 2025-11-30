import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTwofactorsInputObjectSchema as UserCreateWithoutTwofactorsInputObjectSchema } from './UserCreateWithoutTwofactorsInput.schema';
import { UserUncheckedCreateWithoutTwofactorsInputObjectSchema as UserUncheckedCreateWithoutTwofactorsInputObjectSchema } from './UserUncheckedCreateWithoutTwofactorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTwofactorsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTwofactorsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTwofactorsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTwofactorsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTwofactorsInput>;
export const UserCreateOrConnectWithoutTwofactorsInputObjectZodSchema = makeSchema();
