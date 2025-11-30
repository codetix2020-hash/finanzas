import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionOrderByWithRelationInputObjectSchema as AgentDecisionOrderByWithRelationInputObjectSchema } from './objects/AgentDecisionOrderByWithRelationInput.schema';
import { AgentDecisionWhereInputObjectSchema as AgentDecisionWhereInputObjectSchema } from './objects/AgentDecisionWhereInput.schema';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './objects/AgentDecisionWhereUniqueInput.schema';
import { AgentDecisionCountAggregateInputObjectSchema as AgentDecisionCountAggregateInputObjectSchema } from './objects/AgentDecisionCountAggregateInput.schema';

export const AgentDecisionCountSchema: z.ZodType<Prisma.AgentDecisionCountArgs> = z.object({ orderBy: z.union([AgentDecisionOrderByWithRelationInputObjectSchema, AgentDecisionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentDecisionWhereInputObjectSchema.optional(), cursor: AgentDecisionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgentDecisionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AgentDecisionCountArgs>;

export const AgentDecisionCountZodSchema = z.object({ orderBy: z.union([AgentDecisionOrderByWithRelationInputObjectSchema, AgentDecisionOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentDecisionWhereInputObjectSchema.optional(), cursor: AgentDecisionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgentDecisionCountAggregateInputObjectSchema ]).optional() }).strict();