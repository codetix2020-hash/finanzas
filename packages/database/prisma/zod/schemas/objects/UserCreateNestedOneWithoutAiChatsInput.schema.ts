import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateWithoutAiChatsInputObjectSchema as UserCreateWithoutAiChatsInputObjectSchema } from './UserCreateWithoutAiChatsInput.schema';
import { UserUncheckedCreateWithoutAiChatsInputObjectSchema as UserUncheckedCreateWithoutAiChatsInputObjectSchema } from './UserUncheckedCreateWithoutAiChatsInput.schema';
import { UserCreateOrConnectWithoutAiChatsInputObjectSchema as UserCreateOrConnectWithoutAiChatsInputObjectSchema } from './UserCreateOrConnectWithoutAiChatsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAiChatsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAiChatsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAiChatsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAiChatsInput>;
export const UserCreateNestedOneWithoutAiChatsInputObjectZodSchema = makeSchema();
