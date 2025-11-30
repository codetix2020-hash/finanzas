import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsSelectObjectSchema as SaasMetricsSelectObjectSchema } from './objects/SaasMetricsSelect.schema';
import { SaasMetricsIncludeObjectSchema as SaasMetricsIncludeObjectSchema } from './objects/SaasMetricsInclude.schema';
import { SaasMetricsUpdateInputObjectSchema as SaasMetricsUpdateInputObjectSchema } from './objects/SaasMetricsUpdateInput.schema';
import { SaasMetricsUncheckedUpdateInputObjectSchema as SaasMetricsUncheckedUpdateInputObjectSchema } from './objects/SaasMetricsUncheckedUpdateInput.schema';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './objects/SaasMetricsWhereUniqueInput.schema';

export const SaasMetricsUpdateOneSchema: z.ZodType<Prisma.SaasMetricsUpdateArgs> = z.object({ select: SaasMetricsSelectObjectSchema.optional(), include: SaasMetricsIncludeObjectSchema.optional(), data: z.union([SaasMetricsUpdateInputObjectSchema, SaasMetricsUncheckedUpdateInputObjectSchema]), where: SaasMetricsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SaasMetricsUpdateArgs>;

export const SaasMetricsUpdateOneZodSchema = z.object({ select: SaasMetricsSelectObjectSchema.optional(), include: SaasMetricsIncludeObjectSchema.optional(), data: z.union([SaasMetricsUpdateInputObjectSchema, SaasMetricsUncheckedUpdateInputObjectSchema]), where: SaasMetricsWhereUniqueInputObjectSchema }).strict();