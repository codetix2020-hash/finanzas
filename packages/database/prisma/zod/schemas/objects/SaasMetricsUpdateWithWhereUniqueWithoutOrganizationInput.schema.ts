import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './SaasMetricsWhereUniqueInput.schema';
import { SaasMetricsUpdateWithoutOrganizationInputObjectSchema as SaasMetricsUpdateWithoutOrganizationInputObjectSchema } from './SaasMetricsUpdateWithoutOrganizationInput.schema';
import { SaasMetricsUncheckedUpdateWithoutOrganizationInputObjectSchema as SaasMetricsUncheckedUpdateWithoutOrganizationInputObjectSchema } from './SaasMetricsUncheckedUpdateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SaasMetricsUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInput>;
export const SaasMetricsUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
