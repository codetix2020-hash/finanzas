import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './TwoFactorWhereUniqueInput.schema';
import { TwoFactorUpdateWithoutUserInputObjectSchema as TwoFactorUpdateWithoutUserInputObjectSchema } from './TwoFactorUpdateWithoutUserInput.schema';
import { TwoFactorUncheckedUpdateWithoutUserInputObjectSchema as TwoFactorUncheckedUpdateWithoutUserInputObjectSchema } from './TwoFactorUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TwoFactorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TwoFactorUpdateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TwoFactorUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUpdateWithWhereUniqueWithoutUserInput>;
export const TwoFactorUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
