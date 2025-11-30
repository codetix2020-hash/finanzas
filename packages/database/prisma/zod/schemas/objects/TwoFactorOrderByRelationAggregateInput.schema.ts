import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TwoFactorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TwoFactorOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorOrderByRelationAggregateInput>;
export const TwoFactorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
