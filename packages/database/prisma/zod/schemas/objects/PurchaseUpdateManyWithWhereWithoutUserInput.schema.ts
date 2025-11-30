import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseScalarWhereInputObjectSchema as PurchaseScalarWhereInputObjectSchema } from './PurchaseScalarWhereInput.schema';
import { PurchaseUpdateManyMutationInputObjectSchema as PurchaseUpdateManyMutationInputObjectSchema } from './PurchaseUpdateManyMutationInput.schema';
import { PurchaseUncheckedUpdateManyWithoutUserInputObjectSchema as PurchaseUncheckedUpdateManyWithoutUserInputObjectSchema } from './PurchaseUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PurchaseUpdateManyMutationInputObjectSchema), z.lazy(() => PurchaseUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PurchaseUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUpdateManyWithWhereWithoutUserInput>;
export const PurchaseUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
