import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyCreateWithoutUserInputObjectSchema as PasskeyCreateWithoutUserInputObjectSchema } from './PasskeyCreateWithoutUserInput.schema';
import { PasskeyUncheckedCreateWithoutUserInputObjectSchema as PasskeyUncheckedCreateWithoutUserInputObjectSchema } from './PasskeyUncheckedCreateWithoutUserInput.schema';
import { PasskeyCreateOrConnectWithoutUserInputObjectSchema as PasskeyCreateOrConnectWithoutUserInputObjectSchema } from './PasskeyCreateOrConnectWithoutUserInput.schema';
import { PasskeyCreateManyUserInputEnvelopeObjectSchema as PasskeyCreateManyUserInputEnvelopeObjectSchema } from './PasskeyCreateManyUserInputEnvelope.schema';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './PasskeyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PasskeyCreateWithoutUserInputObjectSchema), z.lazy(() => PasskeyCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PasskeyUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PasskeyUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PasskeyCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PasskeyCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PasskeyCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PasskeyWhereUniqueInputObjectSchema), z.lazy(() => PasskeyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PasskeyUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PasskeyUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyUncheckedCreateNestedManyWithoutUserInput>;
export const PasskeyUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
