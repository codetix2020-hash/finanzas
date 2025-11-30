import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsUpdateManyMutationInputObjectSchema as SaasMetricsUpdateManyMutationInputObjectSchema } from './objects/SaasMetricsUpdateManyMutationInput.schema';
import { SaasMetricsWhereInputObjectSchema as SaasMetricsWhereInputObjectSchema } from './objects/SaasMetricsWhereInput.schema';

export const SaasMetricsUpdateManySchema: z.ZodType<Prisma.SaasMetricsUpdateManyArgs> = z.object({ data: SaasMetricsUpdateManyMutationInputObjectSchema, where: SaasMetricsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaasMetricsUpdateManyArgs>;

export const SaasMetricsUpdateManyZodSchema = z.object({ data: SaasMetricsUpdateManyMutationInputObjectSchema, where: SaasMetricsWhereInputObjectSchema.optional() }).strict();