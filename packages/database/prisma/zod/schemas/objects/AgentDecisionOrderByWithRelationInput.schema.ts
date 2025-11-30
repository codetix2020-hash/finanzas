import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  agentType: SortOrderSchema.optional(),
  decision: SortOrderSchema.optional(),
  reasoning: SortOrderSchema.optional(),
  metrics: SortOrderSchema.optional(),
  executed: SortOrderSchema.optional(),
  executedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AgentDecisionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AgentDecisionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionOrderByWithRelationInput>;
export const AgentDecisionOrderByWithRelationInputObjectZodSchema = makeSchema();
