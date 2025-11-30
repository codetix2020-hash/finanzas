import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PasskeyOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PasskeyOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyOrderByRelationAggregateInput>;
export const PasskeyOrderByRelationAggregateInputObjectZodSchema = makeSchema();
