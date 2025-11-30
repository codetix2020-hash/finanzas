import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingSelectObjectSchema as CostTrackingSelectObjectSchema } from './objects/CostTrackingSelect.schema';
import { CostTrackingIncludeObjectSchema as CostTrackingIncludeObjectSchema } from './objects/CostTrackingInclude.schema';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './objects/CostTrackingWhereUniqueInput.schema';

export const CostTrackingFindUniqueOrThrowSchema: z.ZodType<Prisma.CostTrackingFindUniqueOrThrowArgs> = z.object({ select: CostTrackingSelectObjectSchema.optional(), include: CostTrackingIncludeObjectSchema.optional(), where: CostTrackingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CostTrackingFindUniqueOrThrowArgs>;

export const CostTrackingFindUniqueOrThrowZodSchema = z.object({ select: CostTrackingSelectObjectSchema.optional(), include: CostTrackingIncludeObjectSchema.optional(), where: CostTrackingWhereUniqueInputObjectSchema }).strict();