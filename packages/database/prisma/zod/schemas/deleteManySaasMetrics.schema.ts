import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsWhereInputObjectSchema as SaasMetricsWhereInputObjectSchema } from './objects/SaasMetricsWhereInput.schema';

export const SaasMetricsDeleteManySchema: z.ZodType<Prisma.SaasMetricsDeleteManyArgs> = z.object({ where: SaasMetricsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaasMetricsDeleteManyArgs>;

export const SaasMetricsDeleteManyZodSchema = z.object({ where: SaasMetricsWhereInputObjectSchema.optional() }).strict();