import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateWithoutPurchasesInputObjectSchema as UserCreateWithoutPurchasesInputObjectSchema } from './UserCreateWithoutPurchasesInput.schema';
import { UserUncheckedCreateWithoutPurchasesInputObjectSchema as UserUncheckedCreateWithoutPurchasesInputObjectSchema } from './UserUncheckedCreateWithoutPurchasesInput.schema';
import { UserCreateOrConnectWithoutPurchasesInputObjectSchema as UserCreateOrConnectWithoutPurchasesInputObjectSchema } from './UserCreateOrConnectWithoutPurchasesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPurchasesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPurchasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPurchasesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPurchasesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPurchasesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPurchasesInput>;
export const UserCreateNestedOneWithoutPurchasesInputObjectZodSchema = makeSchema();
