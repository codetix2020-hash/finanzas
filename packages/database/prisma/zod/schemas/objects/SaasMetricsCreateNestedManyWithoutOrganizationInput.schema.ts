import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsCreateWithoutOrganizationInputObjectSchema as SaasMetricsCreateWithoutOrganizationInputObjectSchema } from './SaasMetricsCreateWithoutOrganizationInput.schema';
import { SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema as SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema } from './SaasMetricsUncheckedCreateWithoutOrganizationInput.schema';
import { SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema as SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema } from './SaasMetricsCreateOrConnectWithoutOrganizationInput.schema';
import { SaasMetricsCreateManyOrganizationInputEnvelopeObjectSchema as SaasMetricsCreateManyOrganizationInputEnvelopeObjectSchema } from './SaasMetricsCreateManyOrganizationInputEnvelope.schema';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './SaasMetricsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SaasMetricsCreateWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SaasMetricsCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema), z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SaasMetricsCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.SaasMetricsCreateNestedManyWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsCreateNestedManyWithoutOrganizationInput>;
export const SaasMetricsCreateNestedManyWithoutOrganizationInputObjectZodSchema = makeSchema();
