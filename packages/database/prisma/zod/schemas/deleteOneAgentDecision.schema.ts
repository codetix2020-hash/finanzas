import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionSelectObjectSchema as AgentDecisionSelectObjectSchema } from './objects/AgentDecisionSelect.schema';
import { AgentDecisionIncludeObjectSchema as AgentDecisionIncludeObjectSchema } from './objects/AgentDecisionInclude.schema';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './objects/AgentDecisionWhereUniqueInput.schema';

export const AgentDecisionDeleteOneSchema: z.ZodType<Prisma.AgentDecisionDeleteArgs> = z.object({ select: AgentDecisionSelectObjectSchema.optional(), include: AgentDecisionIncludeObjectSchema.optional(), where: AgentDecisionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgentDecisionDeleteArgs>;

export const AgentDecisionDeleteOneZodSchema = z.object({ select: AgentDecisionSelectObjectSchema.optional(), include: AgentDecisionIncludeObjectSchema.optional(), where: AgentDecisionWhereUniqueInputObjectSchema }).strict();