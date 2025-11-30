import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsSelectObjectSchema as SaasMetricsSelectObjectSchema } from './SaasMetricsSelect.schema';
import { SaasMetricsIncludeObjectSchema as SaasMetricsIncludeObjectSchema } from './SaasMetricsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SaasMetricsSelectObjectSchema).optional(),
  include: z.lazy(() => SaasMetricsIncludeObjectSchema).optional()
}).strict();
export const SaasMetricsArgsObjectSchema = makeSchema();
export const SaasMetricsArgsObjectZodSchema = makeSchema();
