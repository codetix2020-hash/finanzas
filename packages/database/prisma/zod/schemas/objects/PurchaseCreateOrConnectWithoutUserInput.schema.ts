import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseCreateWithoutUserInputObjectSchema as PurchaseCreateWithoutUserInputObjectSchema } from './PurchaseCreateWithoutUserInput.schema';
import { PurchaseUncheckedCreateWithoutUserInputObjectSchema as PurchaseUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema), z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PurchaseCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.PurchaseCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateOrConnectWithoutUserInput>;
export const PurchaseCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
