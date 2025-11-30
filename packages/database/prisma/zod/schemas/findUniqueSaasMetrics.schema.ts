import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsSelectObjectSchema as SaasMetricsSelectObjectSchema } from './objects/SaasMetricsSelect.schema';
import { SaasMetricsIncludeObjectSchema as SaasMetricsIncludeObjectSchema } from './objects/SaasMetricsInclude.schema';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './objects/SaasMetricsWhereUniqueInput.schema';

export const SaasMetricsFindUniqueSchema: z.ZodType<Prisma.SaasMetricsFindUniqueArgs> = z.object({ select: SaasMetricsSelectObjectSchema.optional(), include: SaasMetricsIncludeObjectSchema.optional(), where: SaasMetricsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaasMetricsFindUniqueArgs>;

export const SaasMetricsFindUniqueZodSchema = z.object({ select: SaasMetricsSelectObjectSchema.optional(), include: SaasMetricsIncludeObjectSchema.optional(), where: SaasMetricsWhereUniqueInputObjectSchema }).strict();