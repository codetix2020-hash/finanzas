import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  inputTokens: z.literal(true).optional(),
  outputTokens: z.literal(true).optional(),
  totalTokens: z.literal(true).optional(),
  estimatedCost: z.literal(true).optional()
}).strict();
export const CostTrackingSumAggregateInputObjectSchema: z.ZodType<Prisma.CostTrackingSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingSumAggregateInputType>;
export const CostTrackingSumAggregateInputObjectZodSchema = makeSchema();
