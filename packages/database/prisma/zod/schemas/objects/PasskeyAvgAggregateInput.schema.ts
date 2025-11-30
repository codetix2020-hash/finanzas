import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  counter: z.literal(true).optional()
}).strict();
export const PasskeyAvgAggregateInputObjectSchema: z.ZodType<Prisma.PasskeyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyAvgAggregateInputType>;
export const PasskeyAvgAggregateInputObjectZodSchema = makeSchema();
