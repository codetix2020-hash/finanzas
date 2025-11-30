import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './SaasMetricsWhereUniqueInput.schema';
import { SaasMetricsUpdateWithoutOrganizationInputObjectSchema as SaasMetricsUpdateWithoutOrganizationInputObjectSchema } from './SaasMetricsUpdateWithoutOrganizationInput.schema';
import { SaasMetricsUncheckedUpdateWithoutOrganizationInputObjectSchema as SaasMetricsUncheckedUpdateWithoutOrganizationInputObjectSchema } from './SaasMetricsUncheckedUpdateWithoutOrganizationInput.schema';
import { SaasMetricsCreateWithoutOrganizationInputObjectSchema as SaasMetricsCreateWithoutOrganizationInputObjectSchema } from './SaasMetricsCreateWithoutOrganizationInput.schema';
import { SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema as SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema } from './SaasMetricsUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SaasMetricsUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => SaasMetricsCreateWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInput>;
export const SaasMetricsUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
