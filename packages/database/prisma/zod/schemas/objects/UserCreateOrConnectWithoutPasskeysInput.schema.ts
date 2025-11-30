import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPasskeysInputObjectSchema as UserCreateWithoutPasskeysInputObjectSchema } from './UserCreateWithoutPasskeysInput.schema';
import { UserUncheckedCreateWithoutPasskeysInputObjectSchema as UserUncheckedCreateWithoutPasskeysInputObjectSchema } from './UserUncheckedCreateWithoutPasskeysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPasskeysInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPasskeysInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPasskeysInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPasskeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPasskeysInput>;
export const UserCreateOrConnectWithoutPasskeysInputObjectZodSchema = makeSchema();
