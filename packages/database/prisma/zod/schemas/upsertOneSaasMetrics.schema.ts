import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { SaasMetricsSelectObjectSchema as SaasMetricsSelectObjectSchema } from './objects/SaasMetricsSelect.schema';
import { SaasMetricsIncludeObjectSchema as SaasMetricsIncludeObjectSchema } from './objects/SaasMetricsInclude.schema';
import { SaasMetricsWhereUniqueInputObjectSchema as SaasMetricsWhereUniqueInputObjectSchema } from './objects/SaasMetricsWhereUniqueInput.schema';
import { SaasMetricsCreateInputObjectSchema as SaasMetricsCreateInputObjectSchema } from './objects/SaasMetricsCreateInput.schema';
import { SaasMetricsUncheckedCreateInputObjectSchema as SaasMetricsUncheckedCreateInputObjectSchema } from './objects/SaasMetricsUncheckedCreateInput.schema';
import { SaasMetricsUpdateInputObjectSchema as SaasMetricsUpdateInputObjectSchema } from './objects/SaasMetricsUpdateInput.schema';
import { SaasMetricsUncheckedUpdateInputObjectSchema as SaasMetricsUncheckedUpdateInputObjectSchema } from './objects/SaasMetricsUncheckedUpdateInput.schema';

export const SaasMetricsUpsertOneSchema: z.ZodType<Prisma.SaasMetricsUpsertArgs> = z.object({ select: SaasMetricsSelectObjectSchema.optional(), include: SaasMetricsIncludeObjectSchema.optional(), where: SaasMetricsWhereUniqueInputObjectSchema, create: z.union([ SaasMetricsCreateInputObjectSchema, SaasMetricsUncheckedCreateInputObjectSchema ]), update: z.union([ SaasMetricsUpdateInputObjectSchema, SaasMetricsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SaasMetricsUpsertArgs>;

export const SaasMetricsUpsertOneZodSchema = z.object({ select: SaasMetricsSelectObjectSchema.optional(), include: SaasMetricsIncludeObjectSchema.optional(), where: SaasMetricsWhereUniqueInputObjectSchema, create: z.union([ SaasMetricsCreateInputObjectSchema, SaasMetricsUncheckedCreateInputObjectSchema ]), update: z.union([ SaasMetricsUpdateInputObjectSchema, SaasMetricsUncheckedUpdateInputObjectSchema ]) }).strict();