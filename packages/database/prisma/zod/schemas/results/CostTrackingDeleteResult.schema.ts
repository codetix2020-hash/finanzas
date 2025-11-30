import * as z from 'zod';
export const CostTrackingDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  organizationId: z.string(),
  organization: z.unknown(),
  provider: z.unknown(),
  requestId: z.string(),
  inputTokens: z.number().int(),
  outputTokens: z.number().int(),
  totalTokens: z.number().int(),
  estimatedCost: z.number(),
  endpoint: z.string(),
  createdAt: z.date()
}));