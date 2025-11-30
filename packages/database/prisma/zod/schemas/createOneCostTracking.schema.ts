import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingSelectObjectSchema as CostTrackingSelectObjectSchema } from './objects/CostTrackingSelect.schema';
import { CostTrackingIncludeObjectSchema as CostTrackingIncludeObjectSchema } from './objects/CostTrackingInclude.schema';
import { CostTrackingCreateInputObjectSchema as CostTrackingCreateInputObjectSchema } from './objects/CostTrackingCreateInput.schema';
import { CostTrackingUncheckedCreateInputObjectSchema as CostTrackingUncheckedCreateInputObjectSchema } from './objects/CostTrackingUncheckedCreateInput.schema';

export const CostTrackingCreateOneSchema: z.ZodType<Prisma.CostTrackingCreateArgs> = z.object({ select: CostTrackingSelectObjectSchema.optional(), include: CostTrackingIncludeObjectSchema.optional(), data: z.union([CostTrackingCreateInputObjectSchema, CostTrackingUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CostTrackingCreateArgs>;

export const CostTrackingCreateOneZodSchema = z.object({ select: CostTrackingSelectObjectSchema.optional(), include: CostTrackingIncludeObjectSchema.optional(), data: z.union([CostTrackingCreateInputObjectSchema, CostTrackingUncheckedCreateInputObjectSchema]) }).strict();