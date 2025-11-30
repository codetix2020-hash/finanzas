import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsWhereInputObjectSchema as SaasMetricsWhereInputObjectSchema } from './SaasMetricsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SaasMetricsWhereInputObjectSchema).optional(),
  some: z.lazy(() => SaasMetricsWhereInputObjectSchema).optional(),
  none: z.lazy(() => SaasMetricsWhereInputObjectSchema).optional()
}).strict();
export const SaasMetricsListRelationFilterObjectSchema: z.ZodType<Prisma.SaasMetricsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsListRelationFilter>;
export const SaasMetricsListRelationFilterObjectZodSchema = makeSchema();
