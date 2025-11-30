import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  counter: SortOrderSchema.optional()
}).strict();
export const PasskeyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PasskeyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyAvgOrderByAggregateInput>;
export const PasskeyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
