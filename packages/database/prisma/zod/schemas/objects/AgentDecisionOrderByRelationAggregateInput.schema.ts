import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AgentDecisionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AgentDecisionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionOrderByRelationAggregateInput>;
export const AgentDecisionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
