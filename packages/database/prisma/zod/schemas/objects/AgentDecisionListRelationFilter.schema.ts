import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionWhereInputObjectSchema as AgentDecisionWhereInputObjectSchema } from './AgentDecisionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AgentDecisionWhereInputObjectSchema).optional(),
  some: z.lazy(() => AgentDecisionWhereInputObjectSchema).optional(),
  none: z.lazy(() => AgentDecisionWhereInputObjectSchema).optional()
}).strict();
export const AgentDecisionListRelationFilterObjectSchema: z.ZodType<Prisma.AgentDecisionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionListRelationFilter>;
export const AgentDecisionListRelationFilterObjectZodSchema = makeSchema();
