import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingCreateManyInputObjectSchema as CostTrackingCreateManyInputObjectSchema } from './objects/CostTrackingCreateManyInput.schema';

export const CostTrackingCreateManySchema: z.ZodType<Prisma.CostTrackingCreateManyArgs> = z.object({ data: z.union([ CostTrackingCreateManyInputObjectSchema, z.array(CostTrackingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CostTrackingCreateManyArgs>;

export const CostTrackingCreateManyZodSchema = z.object({ data: z.union([ CostTrackingCreateManyInputObjectSchema, z.array(CostTrackingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();