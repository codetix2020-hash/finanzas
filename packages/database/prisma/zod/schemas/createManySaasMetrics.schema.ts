import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsCreateManyInputObjectSchema as SaasMetricsCreateManyInputObjectSchema } from './objects/SaasMetricsCreateManyInput.schema';

export const SaasMetricsCreateManySchema: z.ZodType<Prisma.SaasMetricsCreateManyArgs> = z.object({ data: z.union([ SaasMetricsCreateManyInputObjectSchema, z.array(SaasMetricsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SaasMetricsCreateManyArgs>;

export const SaasMetricsCreateManyZodSchema = z.object({ data: z.union([ SaasMetricsCreateManyInputObjectSchema, z.array(SaasMetricsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();