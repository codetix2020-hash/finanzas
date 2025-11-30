import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsCreateManyOrganizationInputObjectSchema as SaasMetricsCreateManyOrganizationInputObjectSchema } from './SaasMetricsCreateManyOrganizationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SaasMetricsCreateManyOrganizationInputObjectSchema), z.lazy(() => SaasMetricsCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SaasMetricsCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.SaasMetricsCreateManyOrganizationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsCreateManyOrganizationInputEnvelope>;
export const SaasMetricsCreateManyOrganizationInputEnvelopeObjectZodSchema = makeSchema();
