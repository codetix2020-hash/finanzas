import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateWithoutAiChatsInputObjectSchema as UserCreateWithoutAiChatsInputObjectSchema } from './UserCreateWithoutAiChatsInput.schema';
import { UserUncheckedCreateWithoutAiChatsInputObjectSchema as UserUncheckedCreateWithoutAiChatsInputObjectSchema } from './UserUncheckedCreateWithoutAiChatsInput.schema';
import { UserCreateOrConnectWithoutAiChatsInputObjectSchema as UserCreateOrConnectWithoutAiChatsInputObjectSchema } from './UserCreateOrConnectWithoutAiChatsInput.schema';
import { UserUpsertWithoutAiChatsInputObjectSchema as UserUpsertWithoutAiChatsInputObjectSchema } from './UserUpsertWithoutAiChatsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAiChatsInputObjectSchema as UserUpdateToOneWithWhereWithoutAiChatsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAiChatsInput.schema';
import { UserUpdateWithoutAiChatsInputObjectSchema as UserUpdateWithoutAiChatsInputObjectSchema } from './UserUpdateWithoutAiChatsInput.schema';
import { UserUncheckedUpdateWithoutAiChatsInputObjectSchema as UserUncheckedUpdateWithoutAiChatsInputObjectSchema } from './UserUncheckedUpdateWithoutAiChatsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAiChatsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAiChatsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAiChatsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAiChatsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAiChatsInputObjectSchema), z.lazy(() => UserUpdateWithoutAiChatsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAiChatsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutAiChatsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutAiChatsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutAiChatsNestedInput>;
export const UserUpdateOneWithoutAiChatsNestedInputObjectZodSchema = makeSchema();
