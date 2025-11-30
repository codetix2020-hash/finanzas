import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyScalarWhereInputObjectSchema as PasskeyScalarWhereInputObjectSchema } from './PasskeyScalarWhereInput.schema';
import { PasskeyUpdateManyMutationInputObjectSchema as PasskeyUpdateManyMutationInputObjectSchema } from './PasskeyUpdateManyMutationInput.schema';
import { PasskeyUncheckedUpdateManyWithoutUserInputObjectSchema as PasskeyUncheckedUpdateManyWithoutUserInputObjectSchema } from './PasskeyUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasskeyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PasskeyUpdateManyMutationInputObjectSchema), z.lazy(() => PasskeyUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PasskeyUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PasskeyUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyUpdateManyWithWhereWithoutUserInput>;
export const PasskeyUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
