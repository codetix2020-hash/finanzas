import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseCreateWithoutUserInputObjectSchema as PurchaseCreateWithoutUserInputObjectSchema } from './PurchaseCreateWithoutUserInput.schema';
import { PurchaseUncheckedCreateWithoutUserInputObjectSchema as PurchaseUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateWithoutUserInput.schema';
import { PurchaseCreateOrConnectWithoutUserInputObjectSchema as PurchaseCreateOrConnectWithoutUserInputObjectSchema } from './PurchaseCreateOrConnectWithoutUserInput.schema';
import { PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema as PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PurchaseUpsertWithWhereUniqueWithoutUserInput.schema';
import { PurchaseCreateManyUserInputEnvelopeObjectSchema as PurchaseCreateManyUserInputEnvelopeObjectSchema } from './PurchaseCreateManyUserInputEnvelope.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema as PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PurchaseUpdateWithWhereUniqueWithoutUserInput.schema';
import { PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema as PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema } from './PurchaseUpdateManyWithWhereWithoutUserInput.schema';
import { PurchaseScalarWhereInputObjectSchema as PurchaseScalarWhereInputObjectSchema } from './PurchaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema), z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PurchaseCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PurchaseCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PurchaseCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PurchaseScalarWhereInputObjectSchema), z.lazy(() => PurchaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PurchaseUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.PurchaseUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUpdateManyWithoutUserNestedInput>;
export const PurchaseUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
