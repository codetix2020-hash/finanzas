import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './PasskeyWhereUniqueInput.schema';
import { PasskeyUpdateWithoutUserInputObjectSchema as PasskeyUpdateWithoutUserInputObjectSchema } from './PasskeyUpdateWithoutUserInput.schema';
import { PasskeyUncheckedUpdateWithoutUserInputObjectSchema as PasskeyUncheckedUpdateWithoutUserInputObjectSchema } from './PasskeyUncheckedUpdateWithoutUserInput.schema';
import { PasskeyCreateWithoutUserInputObjectSchema as PasskeyCreateWithoutUserInputObjectSchema } from './PasskeyCreateWithoutUserInput.schema';
import { PasskeyUncheckedCreateWithoutUserInputObjectSchema as PasskeyUncheckedCreateWithoutUserInputObjectSchema } from './PasskeyUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasskeyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PasskeyUpdateWithoutUserInputObjectSchema), z.lazy(() => PasskeyUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => PasskeyCreateWithoutUserInputObjectSchema), z.lazy(() => PasskeyUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PasskeyUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PasskeyUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyUpsertWithWhereUniqueWithoutUserInput>;
export const PasskeyUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
