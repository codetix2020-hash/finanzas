import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingCreateWithoutOrganizationInputObjectSchema as CostTrackingCreateWithoutOrganizationInputObjectSchema } from './CostTrackingCreateWithoutOrganizationInput.schema';
import { CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema as CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema } from './CostTrackingUncheckedCreateWithoutOrganizationInput.schema';
import { CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema as CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema } from './CostTrackingCreateOrConnectWithoutOrganizationInput.schema';
import { CostTrackingUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema as CostTrackingUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './CostTrackingUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { CostTrackingCreateManyOrganizationInputEnvelopeObjectSchema as CostTrackingCreateManyOrganizationInputEnvelopeObjectSchema } from './CostTrackingCreateManyOrganizationInputEnvelope.schema';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './CostTrackingWhereUniqueInput.schema';
import { CostTrackingUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema as CostTrackingUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './CostTrackingUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { CostTrackingUpdateManyWithWhereWithoutOrganizationInputObjectSchema as CostTrackingUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './CostTrackingUpdateManyWithWhereWithoutOrganizationInput.schema';
import { CostTrackingScalarWhereInputObjectSchema as CostTrackingScalarWhereInputObjectSchema } from './CostTrackingScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CostTrackingCreateWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CostTrackingUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CostTrackingCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CostTrackingWhereUniqueInputObjectSchema), z.lazy(() => CostTrackingWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CostTrackingWhereUniqueInputObjectSchema), z.lazy(() => CostTrackingWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CostTrackingWhereUniqueInputObjectSchema), z.lazy(() => CostTrackingWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CostTrackingWhereUniqueInputObjectSchema), z.lazy(() => CostTrackingWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CostTrackingUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CostTrackingUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CostTrackingScalarWhereInputObjectSchema), z.lazy(() => CostTrackingScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CostTrackingUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.CostTrackingUpdateManyWithoutOrganizationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingUpdateManyWithoutOrganizationNestedInput>;
export const CostTrackingUpdateManyWithoutOrganizationNestedInputObjectZodSchema = makeSchema();
