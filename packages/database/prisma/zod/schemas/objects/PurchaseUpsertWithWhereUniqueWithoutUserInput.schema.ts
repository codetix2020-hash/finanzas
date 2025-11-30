import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutUserInputObjectSchema as PurchaseUpdateWithoutUserInputObjectSchema } from './PurchaseUpdateWithoutUserInput.schema';
import { PurchaseUncheckedUpdateWithoutUserInputObjectSchema as PurchaseUncheckedUpdateWithoutUserInputObjectSchema } from './PurchaseUncheckedUpdateWithoutUserInput.schema';
import { PurchaseCreateWithoutUserInputObjectSchema as PurchaseCreateWithoutUserInputObjectSchema } from './PurchaseCreateWithoutUserInput.schema';
import { PurchaseUncheckedCreateWithoutUserInputObjectSchema as PurchaseUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PurchaseUpdateWithoutUserInputObjectSchema), z.lazy(() => PurchaseUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema), z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput>;
export const PurchaseUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
