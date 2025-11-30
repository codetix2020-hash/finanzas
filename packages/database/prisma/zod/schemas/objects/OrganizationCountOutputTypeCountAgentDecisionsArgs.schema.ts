import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionWhereInputObjectSchema as AgentDecisionWhereInputObjectSchema } from './AgentDecisionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentDecisionWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountAgentDecisionsArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountAgentDecisionsArgsObjectZodSchema = makeSchema();
