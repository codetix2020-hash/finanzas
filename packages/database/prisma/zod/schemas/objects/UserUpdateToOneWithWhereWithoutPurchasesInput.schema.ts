import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPurchasesInputObjectSchema as UserUpdateWithoutPurchasesInputObjectSchema } from './UserUpdateWithoutPurchasesInput.schema';
import { UserUncheckedUpdateWithoutPurchasesInputObjectSchema as UserUncheckedUpdateWithoutPurchasesInputObjectSchema } from './UserUncheckedUpdateWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPurchasesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPurchasesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPurchasesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPurchasesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPurchasesInput>;
export const UserUpdateToOneWithWhereWithoutPurchasesInputObjectZodSchema = makeSchema();
