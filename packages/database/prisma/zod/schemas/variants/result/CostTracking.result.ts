import * as z from 'zod';
import { AIProviderSchema } from '../../enums/AIProvider.schema';
// prettier-ignore
export const CostTrackingResultSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    provider: AIProviderSchema,
    requestId: z.string(),
    inputTokens: z.number().int(),
    outputTokens: z.number().int(),
    totalTokens: z.number().int(),
    estimatedCost: z.number(),
    endpoint: z.string(),
    createdAt: z.date()
}).strict();

export type CostTrackingResultType = z.infer<typeof CostTrackingResultSchema>;
