import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsSelectObjectSchema as SaasMetricsSelectObjectSchema } from './objects/SaasMetricsSelect.schema';
import { SaasMetricsUpdateManyMutationInputObjectSchema as SaasMetricsUpdateManyMutationInputObjectSchema } from './objects/SaasMetricsUpdateManyMutationInput.schema';
import { SaasMetricsWhereInputObjectSchema as SaasMetricsWhereInputObjectSchema } from './objects/SaasMetricsWhereInput.schema';

export const SaasMetricsUpdateManyAndReturnSchema: z.ZodType<Prisma.SaasMetricsUpdateManyAndReturnArgs> = z.object({ select: SaasMetricsSelectObjectSchema.optional(), data: SaasMetricsUpdateManyMutationInputObjectSchema, where: SaasMetricsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SaasMetricsUpdateManyAndReturnArgs>;

export const SaasMetricsUpdateManyAndReturnZodSchema = z.object({ select: SaasMetricsSelectObjectSchema.optional(), data: SaasMetricsUpdateManyMutationInputObjectSchema, where: SaasMetricsWhereInputObjectSchema.optional() }).strict();