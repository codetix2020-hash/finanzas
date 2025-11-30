import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserUpdateWithoutAiChatsInputObjectSchema as UserUpdateWithoutAiChatsInputObjectSchema } from './UserUpdateWithoutAiChatsInput.schema';
import { UserUncheckedUpdateWithoutAiChatsInputObjectSchema as UserUncheckedUpdateWithoutAiChatsInputObjectSchema } from './UserUncheckedUpdateWithoutAiChatsInput.schema';
import { UserCreateWithoutAiChatsInputObjectSchema as UserCreateWithoutAiChatsInputObjectSchema } from './UserCreateWithoutAiChatsInput.schema';
import { UserUncheckedCreateWithoutAiChatsInputObjectSchema as UserUncheckedCreateWithoutAiChatsInputObjectSchema } from './UserUncheckedCreateWithoutAiChatsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAiChatsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAiChatsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAiChatsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAiChatsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutAiChatsInput>;
export const UserUpsertWithoutAiChatsInputObjectZodSchema = makeSchema();
