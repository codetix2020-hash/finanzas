import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingWhereInputObjectSchema as CostTrackingWhereInputObjectSchema } from './objects/CostTrackingWhereInput.schema';

export const CostTrackingDeleteManySchema: z.ZodType<Prisma.CostTrackingDeleteManyArgs> = z.object({ where: CostTrackingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CostTrackingDeleteManyArgs>;

export const CostTrackingDeleteManyZodSchema = z.object({ where: CostTrackingWhereInputObjectSchema.optional() }).strict();