import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  provider: z.literal(true).optional(),
  requestId: z.literal(true).optional(),
  inputTokens: z.literal(true).optional(),
  outputTokens: z.literal(true).optional(),
  totalTokens: z.literal(true).optional(),
  estimatedCost: z.literal(true).optional(),
  endpoint: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CostTrackingCountAggregateInputObjectSchema: z.ZodType<Prisma.CostTrackingCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingCountAggregateInputType>;
export const CostTrackingCountAggregateInputObjectZodSchema = makeSchema();
