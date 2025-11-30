import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsSelectObjectSchema as SaasMetricsSelectObjectSchema } from './objects/SaasMetricsSelect.schema';
import { SaasMetricsIncludeObjectSchema as SaasMetricsIncludeObjectSchema } from './objects/SaasMetricsInclude.schema';
import { SaasMetricsCreateInputObjectSchema as SaasMetricsCreateInputObjectSchema } from './objects/SaasMetricsCreateInput.schema';
import { SaasMetricsUncheckedCreateInputObjectSchema as SaasMetricsUncheckedCreateInputObjectSchema } from './objects/SaasMetricsUncheckedCreateInput.schema';

export const SaasMetricsCreateOneSchema: z.ZodType<Prisma.SaasMetricsCreateArgs> = z.object({ select: SaasMetricsSelectObjectSchema.optional(), include: SaasMetricsIncludeObjectSchema.optional(), data: z.union([SaasMetricsCreateInputObjectSchema, SaasMetricsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SaasMetricsCreateArgs>;

export const SaasMetricsCreateOneZodSchema = z.object({ select: SaasMetricsSelectObjectSchema.optional(), include: SaasMetricsIncludeObjectSchema.optional(), data: z.union([SaasMetricsCreateInputObjectSchema, SaasMetricsUncheckedCreateInputObjectSchema]) }).strict();