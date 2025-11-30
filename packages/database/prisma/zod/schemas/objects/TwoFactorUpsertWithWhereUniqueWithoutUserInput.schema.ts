import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './TwoFactorWhereUniqueInput.schema';
import { TwoFactorUpdateWithoutUserInputObjectSchema as TwoFactorUpdateWithoutUserInputObjectSchema } from './TwoFactorUpdateWithoutUserInput.schema';
import { TwoFactorUncheckedUpdateWithoutUserInputObjectSchema as TwoFactorUncheckedUpdateWithoutUserInputObjectSchema } from './TwoFactorUncheckedUpdateWithoutUserInput.schema';
import { TwoFactorCreateWithoutUserInputObjectSchema as TwoFactorCreateWithoutUserInputObjectSchema } from './TwoFactorCreateWithoutUserInput.schema';
import { TwoFactorUncheckedCreateWithoutUserInputObjectSchema as TwoFactorUncheckedCreateWithoutUserInputObjectSchema } from './TwoFactorUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TwoFactorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TwoFactorUpdateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TwoFactorCreateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TwoFactorUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUpsertWithWhereUniqueWithoutUserInput>;
export const TwoFactorUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
