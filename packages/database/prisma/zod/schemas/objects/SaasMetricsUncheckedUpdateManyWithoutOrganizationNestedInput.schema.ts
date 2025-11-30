import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsCreateWithoutOrganizationInputObjectSchema as SaasMetricsCreateWithoutOrganizationInputObjectSchema } from './SaasMetricsCreateWithoutOrganizationInput.schema';
import { SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema as SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema } from './SaasMetricsUncheckedCreateWithoutOrganizationInput.schema';
import { SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema as SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema } from './SaasMetricsCreateOrConnectWithoutOrganizationInput.schema';
import { SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema as SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { SaasMetricsCreateManyOrganizationInputEnvelopeObjectSchema as SaasMetricsCreateManyOrganizationInputEnvelopeObjectSchema } from './SaasMetricsCreateManyOrganizationInputEnvelope.schema';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './SaasMetricsWhereUniqueInput.schema';
import { SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema as SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { SaasMetricsUpdateManyWithWhereWithoutOrganizationInputObjectSchema as SaasMetricsUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './SaasMetricsUpdateManyWithWhereWithoutOrganizationInput.schema';
import { SaasMetricsScalarWhereInputObjectSchema as SaasMetricsScalarWhereInputObjectSchema } from './SaasMetricsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaasMetricsCreateWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaasMetricsCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema), z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema), z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema), z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema), z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SaasMetricsUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SaasMetricsScalarWhereInputObjectSchema), z.lazy(() => SaasMetricsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SaasMetricsUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.SaasMetricsUncheckedUpdateManyWithoutOrganizationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsUncheckedUpdateManyWithoutOrganizationNestedInput>;
export const SaasMetricsUncheckedUpdateManyWithoutOrganizationNestedInputObjectZodSchema = makeSchema();
