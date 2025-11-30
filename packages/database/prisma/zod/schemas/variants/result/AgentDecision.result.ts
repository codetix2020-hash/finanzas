import * as z from 'zod';
import { DecisionSchema } from '../../enums/Decision.schema';
// prettier-ignore
export const AgentDecisionResultSchema = z.object({
    id: z.string(),
    organizationId: z.string(),
    organization: z.unknown(),
    agentType: z.string(),
    decision: DecisionSchema,
    reasoning: z.string(),
    metrics: z.unknown(),
    executed: z.boolean(),
    executedAt: z.date().nullable(),
    createdAt: z.date()
}).strict();

export type AgentDecisionResultType = z.infer<typeof AgentDecisionResultSchema>;
