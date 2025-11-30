import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorScalarWhereInputObjectSchema as TwoFactorScalarWhereInputObjectSchema } from './TwoFactorScalarWhereInput.schema';
import { TwoFactorUpdateManyMutationInputObjectSchema as TwoFactorUpdateManyMutationInputObjectSchema } from './TwoFactorUpdateManyMutationInput.schema';
import { TwoFactorUncheckedUpdateManyWithoutUserInputObjectSchema as TwoFactorUncheckedUpdateManyWithoutUserInputObjectSchema } from './TwoFactorUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TwoFactorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TwoFactorUpdateManyMutationInputObjectSchema), z.lazy(() => TwoFactorUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TwoFactorUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUpdateManyWithWhereWithoutUserInput>;
export const TwoFactorUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
