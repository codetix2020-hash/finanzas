import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsWhereInputObjectSchema as SaasMetricsWhereInputObjectSchema } from './SaasMetricsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SaasMetricsWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountSaasMetricsArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountSaasMetricsArgsObjectZodSchema = makeSchema();
