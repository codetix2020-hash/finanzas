import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsSelectObjectSchema as SaasMetricsSelectObjectSchema } from './objects/SaasMetricsSelect.schema';
import { SaasMetricsCreateManyInputObjectSchema as SaasMetricsCreateManyInputObjectSchema } from './objects/SaasMetricsCreateManyInput.schema';

export const SaasMetricsCreateManyAndReturnSchema: z.ZodType<Prisma.SaasMetricsCreateManyAndReturnArgs> = z.object({ select: SaasMetricsSelectObjectSchema.optional(), data: z.union([ SaasMetricsCreateManyInputObjectSchema, z.array(SaasMetricsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaasMetricsCreateManyAndReturnArgs>;

export const SaasMetricsCreateManyAndReturnZodSchema = z.object({ select: SaasMetricsSelectObjectSchema.optional(), data: z.union([ SaasMetricsCreateManyInputObjectSchema, z.array(SaasMetricsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();