import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseCreateWithoutOrganizationInputObjectSchema as PurchaseCreateWithoutOrganizationInputObjectSchema } from './PurchaseCreateWithoutOrganizationInput.schema';
import { PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema as PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema } from './PurchaseUncheckedCreateWithoutOrganizationInput.schema';
import { PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema as PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema } from './PurchaseCreateOrConnectWithoutOrganizationInput.schema';
import { PurchaseUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema as PurchaseUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './PurchaseUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { PurchaseCreateManyOrganizationInputEnvelopeObjectSchema as PurchaseCreateManyOrganizationInputEnvelopeObjectSchema } from './PurchaseCreateManyOrganizationInputEnvelope.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema as PurchaseUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './PurchaseUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { PurchaseUpdateManyWithWhereWithoutOrganizationInputObjectSchema as PurchaseUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './PurchaseUpdateManyWithWhereWithoutOrganizationInput.schema';
import { PurchaseScalarWhereInputObjectSchema as PurchaseScalarWhereInputObjectSchema } from './PurchaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PurchaseCreateWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PurchaseUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PurchaseCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PurchaseUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PurchaseUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PurchaseScalarWhereInputObjectSchema), z.lazy(() => PurchaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PurchaseUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.PurchaseUncheckedUpdateManyWithoutOrganizationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUncheckedUpdateManyWithoutOrganizationNestedInput>;
export const PurchaseUncheckedUpdateManyWithoutOrganizationNestedInputObjectZodSchema = makeSchema();
