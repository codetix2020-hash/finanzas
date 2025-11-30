import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingSelectObjectSchema as CostTrackingSelectObjectSchema } from './objects/CostTrackingSelect.schema';
import { CostTrackingCreateManyInputObjectSchema as CostTrackingCreateManyInputObjectSchema } from './objects/CostTrackingCreateManyInput.schema';

export const CostTrackingCreateManyAndReturnSchema: z.ZodType<Prisma.CostTrackingCreateManyAndReturnArgs> = z.object({ select: CostTrackingSelectObjectSchema.optional(), data: z.union([ CostTrackingCreateManyInputObjectSchema, z.array(CostTrackingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CostTrackingCreateManyAndReturnArgs>;

export const CostTrackingCreateManyAndReturnZodSchema = z.object({ select: CostTrackingSelectObjectSchema.optional(), data: z.union([ CostTrackingCreateManyInputObjectSchema, z.array(CostTrackingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();