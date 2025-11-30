import * as z from 'zod';

export const CostTrackingScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'provider', 'requestId', 'inputTokens', 'outputTokens', 'totalTokens', 'estimatedCost', 'endpoint', 'createdAt'])

export type CostTrackingScalarFieldEnum = z.infer<typeof CostTrackingScalarFieldEnumSchema>;