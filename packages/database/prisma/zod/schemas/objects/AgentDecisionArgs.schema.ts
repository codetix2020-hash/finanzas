import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionSelectObjectSchema as AgentDecisionSelectObjectSchema } from './AgentDecisionSelect.schema';
import { AgentDecisionIncludeObjectSchema as AgentDecisionIncludeObjectSchema } from './AgentDecisionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgentDecisionSelectObjectSchema).optional(),
  include: z.lazy(() => AgentDecisionIncludeObjectSchema).optional()
}).strict();
export const AgentDecisionArgsObjectSchema = makeSchema();
export const AgentDecisionArgsObjectZodSchema = makeSchema();
