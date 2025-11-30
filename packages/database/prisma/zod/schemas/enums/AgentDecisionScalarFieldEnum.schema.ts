import * as z from 'zod';

export const AgentDecisionScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'agentType', 'decision', 'reasoning', 'metrics', 'executed', 'executedAt', 'createdAt'])

export type AgentDecisionScalarFieldEnum = z.infer<typeof AgentDecisionScalarFieldEnumSchema>;