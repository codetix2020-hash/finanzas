import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  counter: SortOrderSchema.optional()
}).strict();
export const PasskeySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PasskeySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeySumOrderByAggregateInput>;
export const PasskeySumOrderByAggregateInputObjectZodSchema = makeSchema();
