import * as z from 'zod';
export const CostTrackingGroupByResultSchema = z.array(z.object({
  id: z.string(),
  organizationId: z.string(),
  requestId: z.string(),
  inputTokens: z.number().int(),
  outputTokens: z.number().int(),
  totalTokens: z.number().int(),
  estimatedCost: z.number(),
  endpoint: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    organizationId: z.number(),
    organization: z.number(),
    provider: z.number(),
    requestId: z.number(),
    inputTokens: z.number(),
    outputTokens: z.number(),
    totalTokens: z.number(),
    estimatedCost: z.number(),
    endpoint: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    inputTokens: z.number().nullable(),
    outputTokens: z.number().nullable(),
    totalTokens: z.number().nullable(),
    estimatedCost: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    inputTokens: z.number().nullable(),
    outputTokens: z.number().nullable(),
    totalTokens: z.number().nullable(),
    estimatedCost: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    requestId: z.string().nullable(),
    inputTokens: z.number().int().nullable(),
    outputTokens: z.number().int().nullable(),
    totalTokens: z.number().int().nullable(),
    estimatedCost: z.number().nullable(),
    endpoint: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    organizationId: z.string().nullable(),
    requestId: z.string().nullable(),
    inputTokens: z.number().int().nullable(),
    outputTokens: z.number().int().nullable(),
    totalTokens: z.number().int().nullable(),
    estimatedCost: z.number().nullable(),
    endpoint: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));