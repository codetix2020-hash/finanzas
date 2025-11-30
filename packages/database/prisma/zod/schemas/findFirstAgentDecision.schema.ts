import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionIncludeObjectSchema as AgentDecisionIncludeObjectSchema } from './objects/AgentDecisionInclude.schema';
import { AgentDecisionOrderByWithRelationInputObjectSchema as AgentDecisionOrderByWithRelationInputObjectSchema } from './objects/AgentDecisionOrderByWithRelationInput.schema';
import { AgentDecisionWhereInputObjectSchema as AgentDecisionWhereInputObjectSchema } from './objects/AgentDecisionWhereInput.schema';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './objects/AgentDecisionWhereUniqueInput.schema';
import { AgentDecisionScalarFieldEnumSchema } from './enums/AgentDecisionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AgentDecisionFindFirstSelectSchema: z.ZodType<Prisma.AgentDecisionSelect> = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    agentType: z.boolean().optional(),
    decision: z.boolean().optional(),
    reasoning: z.boolean().optional(),
    metrics: z.boolean().optional(),
    executed: z.boolean().optional(),
    executedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AgentDecisionSelect>;

export const AgentDecisionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    agentType: z.boolean().optional(),
    decision: z.boolean().optional(),
    reasoning: z.boolean().optional(),
    metrics: z.boolean().optional(),
    executed: z.boolean().optional(),
    executedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const AgentDecisionFindFirstSchema: z.ZodType<Prisma.AgentDecisionFindFirstArgs> = z.object({ select: AgentDecisionFindFirstSelectSchema.optional(), include: z.lazy(() => AgentDecisionIncludeObjectSchema.optional()), orderBy: z.union([AgentDecisionOrderByWithRelationInputObjectSchema, AgentDecisionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentDecisionWhereInputObjectSchema.optional(), cursor: AgentDecisionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgentDecisionScalarFieldEnumSchema, AgentDecisionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AgentDecisionFindFirstArgs>;

export const AgentDecisionFindFirstZodSchema = z.object({ select: AgentDecisionFindFirstSelectSchema.optional(), include: z.lazy(() => AgentDecisionIncludeObjectSchema.optional()), orderBy: z.union([AgentDecisionOrderByWithRelationInputObjectSchema, AgentDecisionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentDecisionWhereInputObjectSchema.optional(), cursor: AgentDecisionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgentDecisionScalarFieldEnumSchema, AgentDecisionScalarFieldEnumSchema.array()]).optional() }).strict();