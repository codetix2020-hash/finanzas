import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './PasskeyWhereUniqueInput.schema';
import { PasskeyUpdateWithoutUserInputObjectSchema as PasskeyUpdateWithoutUserInputObjectSchema } from './PasskeyUpdateWithoutUserInput.schema';
import { PasskeyUncheckedUpdateWithoutUserInputObjectSchema as PasskeyUncheckedUpdateWithoutUserInputObjectSchema } from './PasskeyUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasskeyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PasskeyUpdateWithoutUserInputObjectSchema), z.lazy(() => PasskeyUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PasskeyUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PasskeyUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyUpdateWithWhereUniqueWithoutUserInput>;
export const PasskeyUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
