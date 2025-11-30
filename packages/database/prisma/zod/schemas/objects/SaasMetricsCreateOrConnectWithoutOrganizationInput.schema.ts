import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './SaasMetricsWhereUniqueInput.schema';
import { SaasMetricsCreateWithoutOrganizationInputObjectSchema as SaasMetricsCreateWithoutOrganizationInputObjectSchema } from './SaasMetricsCreateWithoutOrganizationInput.schema';
import { SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema as SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema } from './SaasMetricsUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaasMetricsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SaasMetricsCreateWithoutOrganizationInputObjectSchema), z.lazy(() => SaasMetricsUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const SaasMetricsCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.SaasMetricsCreateOrConnectWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsCreateOrConnectWithoutOrganizationInput>;
export const SaasMetricsCreateOrConnectWithoutOrganizationInputObjectZodSchema = makeSchema();
