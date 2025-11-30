import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './PasskeyWhereUniqueInput.schema';
import { PasskeyCreateWithoutUserInputObjectSchema as PasskeyCreateWithoutUserInputObjectSchema } from './PasskeyCreateWithoutUserInput.schema';
import { PasskeyUncheckedCreateWithoutUserInputObjectSchema as PasskeyUncheckedCreateWithoutUserInputObjectSchema } from './PasskeyUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasskeyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PasskeyCreateWithoutUserInputObjectSchema), z.lazy(() => PasskeyUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PasskeyCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.PasskeyCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyCreateOrConnectWithoutUserInput>;
export const PasskeyCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
