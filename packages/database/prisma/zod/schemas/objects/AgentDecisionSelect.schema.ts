import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  agentType: z.boolean().optional(),
  decision: z.boolean().optional(),
  reasoning: z.boolean().optional(),
  metrics: z.boolean().optional(),
  executed: z.boolean().optional(),
  executedAt: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const AgentDecisionSelectObjectSchema: z.ZodType<Prisma.AgentDecisionSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionSelect>;
export const AgentDecisionSelectObjectZodSchema = makeSchema();
