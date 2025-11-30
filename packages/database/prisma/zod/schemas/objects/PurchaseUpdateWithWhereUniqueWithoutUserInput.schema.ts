import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutUserInputObjectSchema as PurchaseUpdateWithoutUserInputObjectSchema } from './PurchaseUpdateWithoutUserInput.schema';
import { PurchaseUncheckedUpdateWithoutUserInputObjectSchema as PurchaseUncheckedUpdateWithoutUserInputObjectSchema } from './PurchaseUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PurchaseUpdateWithoutUserInputObjectSchema), z.lazy(() => PurchaseUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput>;
export const PurchaseUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
