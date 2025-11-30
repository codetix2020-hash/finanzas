import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAiChatsInputObjectSchema as UserCreateWithoutAiChatsInputObjectSchema } from './UserCreateWithoutAiChatsInput.schema';
import { UserUncheckedCreateWithoutAiChatsInputObjectSchema as UserUncheckedCreateWithoutAiChatsInputObjectSchema } from './UserUncheckedCreateWithoutAiChatsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAiChatsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAiChatsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAiChatsInput>;
export const UserCreateOrConnectWithoutAiChatsInputObjectZodSchema = makeSchema();
