import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTwofactorsInputObjectSchema as UserUpdateWithoutTwofactorsInputObjectSchema } from './UserUpdateWithoutTwofactorsInput.schema';
import { UserUncheckedUpdateWithoutTwofactorsInputObjectSchema as UserUncheckedUpdateWithoutTwofactorsInputObjectSchema } from './UserUncheckedUpdateWithoutTwofactorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTwofactorsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTwofactorsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTwofactorsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTwofactorsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTwofactorsInput>;
export const UserUpdateToOneWithWhereWithoutTwofactorsInputObjectZodSchema = makeSchema();
