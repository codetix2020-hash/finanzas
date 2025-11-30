import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAiChatsInputObjectSchema as UserUpdateWithoutAiChatsInputObjectSchema } from './UserUpdateWithoutAiChatsInput.schema';
import { UserUncheckedUpdateWithoutAiChatsInputObjectSchema as UserUncheckedUpdateWithoutAiChatsInputObjectSchema } from './UserUncheckedUpdateWithoutAiChatsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAiChatsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAiChatsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAiChatsInput>;
export const UserUpdateToOneWithWhereWithoutAiChatsInputObjectZodSchema = makeSchema();
