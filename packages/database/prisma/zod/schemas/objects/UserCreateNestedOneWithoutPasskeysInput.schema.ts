import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateWithoutPasskeysInputObjectSchema as UserCreateWithoutPasskeysInputObjectSchema } from './UserCreateWithoutPasskeysInput.schema';
import { UserUncheckedCreateWithoutPasskeysInputObjectSchema as UserUncheckedCreateWithoutPasskeysInputObjectSchema } from './UserUncheckedCreateWithoutPasskeysInput.schema';
import { UserCreateOrConnectWithoutPasskeysInputObjectSchema as UserCreateOrConnectWithoutPasskeysInputObjectSchema } from './UserCreateOrConnectWithoutPasskeysInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPasskeysInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPasskeysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPasskeysInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPasskeysInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPasskeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPasskeysInput>;
export const UserCreateNestedOneWithoutPasskeysInputObjectZodSchema = makeSchema();
