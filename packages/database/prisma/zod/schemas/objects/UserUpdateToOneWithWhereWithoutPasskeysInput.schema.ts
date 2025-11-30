import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPasskeysInputObjectSchema as UserUpdateWithoutPasskeysInputObjectSchema } from './UserUpdateWithoutPasskeysInput.schema';
import { UserUncheckedUpdateWithoutPasskeysInputObjectSchema as UserUncheckedUpdateWithoutPasskeysInputObjectSchema } from './UserUncheckedUpdateWithoutPasskeysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPasskeysInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPasskeysInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPasskeysInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPasskeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPasskeysInput>;
export const UserUpdateToOneWithWhereWithoutPasskeysInputObjectZodSchema = makeSchema();
