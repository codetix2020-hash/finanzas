import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsScalarWhereInputObjectSchema as SaasMetricsScalarWhereInputObjectSchema } from './SaasMetricsScalarWhereInput.schema';
import { SaasMetricsUpdateManyMutationInputObjectSchema as SaasMetricsUpdateManyMutationInputObjectSchema } from './SaasMetricsUpdateManyMutationInput.schema';
import { SaasMetricsUncheckedUpdateManyWithoutOrganizationInputObjectSchema as SaasMetricsUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './SaasMetricsUncheckedUpdateManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaasMetricsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SaasMetricsUpdateManyMutationInputObjectSchema), z.lazy(() => SaasMetricsUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const SaasMetricsUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.SaasMetricsUpdateManyWithWhereWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsUpdateManyWithWhereWithoutOrganizationInput>;
export const SaasMetricsUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = makeSchema();
