import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingSelectObjectSchema as CostTrackingSelectObjectSchema } from './objects/CostTrackingSelect.schema';
import { CostTrackingIncludeObjectSchema as CostTrackingIncludeObjectSchema } from './objects/CostTrackingInclude.schema';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './objects/CostTrackingWhereUniqueInput.schema';
import { CostTrackingCreateInputObjectSchema as CostTrackingCreateInputObjectSchema } from './objects/CostTrackingCreateInput.schema';
import { CostTrackingUncheckedCreateInputObjectSchema as CostTrackingUncheckedCreateInputObjectSchema } from './objects/CostTrackingUncheckedCreateInput.schema';
import { CostTrackingUpdateInputObjectSchema as CostTrackingUpdateInputObjectSchema } from './objects/CostTrackingUpdateInput.schema';
import { CostTrackingUncheckedUpdateInputObjectSchema as CostTrackingUncheckedUpdateInputObjectSchema } from './objects/CostTrackingUncheckedUpdateInput.schema';

export const CostTrackingUpsertOneSchema: z.ZodType<Prisma.CostTrackingUpsertArgs> = z.object({ select: CostTrackingSelectObjectSchema.optional(), include: CostTrackingIncludeObjectSchema.optional(), where: CostTrackingWhereUniqueInputObjectSchema, create: z.union([ CostTrackingCreateInputObjectSchema, CostTrackingUncheckedCreateInputObjectSchema ]), update: z.union([ CostTrackingUpdateInputObjectSchema, CostTrackingUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CostTrackingUpsertArgs>;

export const CostTrackingUpsertOneZodSchema = z.object({ select: CostTrackingSelectObjectSchema.optional(), include: CostTrackingIncludeObjectSchema.optional(), where: CostTrackingWhereUniqueInputObjectSchema, create: z.union([ CostTrackingCreateInputObjectSchema, CostTrackingUncheckedCreateInputObjectSchema ]), update: z.union([ CostTrackingUpdateInputObjectSchema, CostTrackingUncheckedUpdateInputObjectSchema ]) }).strict();