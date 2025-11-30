import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  counter: z.literal(true).optional()
}).strict();
export const PasskeySumAggregateInputObjectSchema: z.ZodType<Prisma.PasskeySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PasskeySumAggregateInputType>;
export const PasskeySumAggregateInputObjectZodSchema = makeSchema();
