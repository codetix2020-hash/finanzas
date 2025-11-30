import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPurchasesInputObjectSchema as UserCreateWithoutPurchasesInputObjectSchema } from './UserCreateWithoutPurchasesInput.schema';
import { UserUncheckedCreateWithoutPurchasesInputObjectSchema as UserUncheckedCreateWithoutPurchasesInputObjectSchema } from './UserUncheckedCreateWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPurchasesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPurchasesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPurchasesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPurchasesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPurchasesInput>;
export const UserCreateOrConnectWithoutPurchasesInputObjectZodSchema = makeSchema();
