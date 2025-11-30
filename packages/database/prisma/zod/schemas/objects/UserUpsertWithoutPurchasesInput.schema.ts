import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserUpdateWithoutPurchasesInputObjectSchema as UserUpdateWithoutPurchasesInputObjectSchema } from './UserUpdateWithoutPurchasesInput.schema';
import { UserUncheckedUpdateWithoutPurchasesInputObjectSchema as UserUncheckedUpdateWithoutPurchasesInputObjectSchema } from './UserUncheckedUpdateWithoutPurchasesInput.schema';
import { UserCreateWithoutPurchasesInputObjectSchema as UserCreateWithoutPurchasesInputObjectSchema } from './UserCreateWithoutPurchasesInput.schema';
import { UserUncheckedCreateWithoutPurchasesInputObjectSchema as UserUncheckedCreateWithoutPurchasesInputObjectSchema } from './UserUncheckedCreateWithoutPurchasesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPurchasesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPurchasesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPurchasesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPurchasesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPurchasesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPurchasesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPurchasesInput>;
export const UserUpsertWithoutPurchasesInputObjectZodSchema = makeSchema();
