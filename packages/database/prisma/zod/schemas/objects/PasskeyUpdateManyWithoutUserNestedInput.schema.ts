import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyCreateWithoutUserInputObjectSchema as PasskeyCreateWithoutUserInputObjectSchema } from './PasskeyCreateWithoutUserInput.schema';
import { PasskeyUncheckedCreateWithoutUserInputObjectSchema as PasskeyUncheckedCreateWithoutUserInputObjectSchema } from './PasskeyUncheckedCreateWithoutUserInput.schema';
import { PasskeyCreateOrConnectWithoutUserInputObjectSchema as PasskeyCreateOrConnectWithoutUserInputObjectSchema } from './PasskeyCreateOrConnectWithoutUserInput.schema';
import { PasskeyUpsertWithWhereUniqueWithoutUserInputObjectSchema as PasskeyUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PasskeyUpsertWithWhereUniqueWithoutUserInput.schema';
import { PasskeyCreateManyUserInputEnvelopeObjectSchema as PasskeyCreateManyUserInputEnvelopeObjectSchema } from './PasskeyCreateManyUserInputEnvelope.schema';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './PasskeyWhereUniqueInput.schema';
import { PasskeyUpdateWithWhereUniqueWithoutUserInputObjectSchema as PasskeyUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PasskeyUpdateWithWhereUniqueWithoutUserInput.schema';
import { PasskeyUpdateManyWithWhereWithoutUserInputObjectSchema as PasskeyUpdateManyWithWhereWithoutUserInputObjectSchema } from './PasskeyUpdateManyWithWhereWithoutUserInput.schema';
import { PasskeyScalarWhereInputObjectSchema as PasskeyScalarWhereInputObjectSchema } from './PasskeyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PasskeyCreateWithoutUserInputObjectSchema), z.lazy(() => PasskeyCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PasskeyUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PasskeyUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PasskeyCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PasskeyCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PasskeyUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PasskeyUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PasskeyCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PasskeyWhereUniqueInputObjectSchema), z.lazy(() => PasskeyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PasskeyWhereUniqueInputObjectSchema), z.lazy(() => PasskeyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PasskeyWhereUniqueInputObjectSchema), z.lazy(() => PasskeyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PasskeyWhereUniqueInputObjectSchema), z.lazy(() => PasskeyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PasskeyUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PasskeyUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PasskeyUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => PasskeyUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PasskeyScalarWhereInputObjectSchema), z.lazy(() => PasskeyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PasskeyUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.PasskeyUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyUpdateManyWithoutUserNestedInput>;
export const PasskeyUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
