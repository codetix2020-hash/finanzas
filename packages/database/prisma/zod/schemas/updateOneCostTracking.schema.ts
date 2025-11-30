import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingSelectObjectSchema as CostTrackingSelectObjectSchema } from './objects/CostTrackingSelect.schema';
import { CostTrackingIncludeObjectSchema as CostTrackingIncludeObjectSchema } from './objects/CostTrackingInclude.schema';
import { CostTrackingUpdateInputObjectSchema as CostTrackingUpdateInputObjectSchema } from './objects/CostTrackingUpdateInput.schema';
import { CostTrackingUncheckedUpdateInputObjectSchema as CostTrackingUncheckedUpdateInputObjectSchema } from './objects/CostTrackingUncheckedUpdateInput.schema';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './objects/CostTrackingWhereUniqueInput.schema';

export const CostTrackingUpdateOneSchema: z.ZodType<Prisma.CostTrackingUpdateArgs> = z.object({ select: CostTrackingSelectObjectSchema.optional(), include: CostTrackingIncludeObjectSchema.optional(), data: z.union([CostTrackingUpdateInputObjectSchema, CostTrackingUncheckedUpdateInputObjectSchema]), where: CostTrackingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CostTrackingUpdateArgs>;

export const CostTrackingUpdateOneZodSchema = z.object({ select: CostTrackingSelectObjectSchema.optional(), include: CostTrackingIncludeObjectSchema.optional(), data: z.union([CostTrackingUpdateInputObjectSchema, CostTrackingUncheckedUpdateInputObjectSchema]), where: CostTrackingWhereUniqueInputObjectSchema }).strict();