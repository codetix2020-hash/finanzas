import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateWithoutPurchasesInputObjectSchema as UserCreateWithoutPurchasesInputObjectSchema } from './UserCreateWithoutPurchasesInput.schema';
import { UserUncheckedCreateWithoutPurchasesInputObjectSchema as UserUncheckedCreateWithoutPurchasesInputObjectSchema } from './UserUncheckedCreateWithoutPurchasesInput.schema';
import { UserCreateOrConnectWithoutPurchasesInputObjectSchema as UserCreateOrConnectWithoutPurchasesInputObjectSchema } from './UserCreateOrConnectWithoutPurchasesInput.schema';
import { UserUpsertWithoutPurchasesInputObjectSchema as UserUpsertWithoutPurchasesInputObjectSchema } from './UserUpsertWithoutPurchasesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPurchasesInputObjectSchema as UserUpdateToOneWithWhereWithoutPurchasesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPurchasesInput.schema';
import { UserUpdateWithoutPurchasesInputObjectSchema as UserUpdateWithoutPurchasesInputObjectSchema } from './UserUpdateWithoutPurchasesInput.schema';
import { UserUncheckedUpdateWithoutPurchasesInputObjectSchema as UserUncheckedUpdateWithoutPurchasesInputObjectSchema } from './UserUncheckedUpdateWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPurchasesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPurchasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPurchasesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPurchasesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPurchasesInputObjectSchema), z.lazy(() => UserUpdateWithoutPurchasesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPurchasesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutPurchasesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutPurchasesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutPurchasesNestedInput>;
export const UserUpdateOneWithoutPurchasesNestedInputObjectZodSchema = makeSchema();
