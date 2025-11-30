import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionSelectObjectSchema as AgentDecisionSelectObjectSchema } from './objects/AgentDecisionSelect.schema';
import { AgentDecisionIncludeObjectSchema as AgentDecisionIncludeObjectSchema } from './objects/AgentDecisionInclude.schema';
import { AgentDecisionUpdateInputObjectSchema as AgentDecisionUpdateInputObjectSchema } from './objects/AgentDecisionUpdateInput.schema';
import { AgentDecisionUncheckedUpdateInputObjectSchema as AgentDecisionUncheckedUpdateInputObjectSchema } from './objects/AgentDecisionUncheckedUpdateInput.schema';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './objects/AgentDecisionWhereUniqueInput.schema';

export const AgentDecisionUpdateOneSchema: z.ZodType<Prisma.AgentDecisionUpdateArgs> = z.object({ select: AgentDecisionSelectObjectSchema.optional(), include: AgentDecisionIncludeObjectSchema.optional(), data: z.union([AgentDecisionUpdateInputObjectSchema, AgentDecisionUncheckedUpdateInputObjectSchema]), where: AgentDecisionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgentDecisionUpdateArgs>;

export const AgentDecisionUpdateOneZodSchema = z.object({ select: AgentDecisionSelectObjectSchema.optional(), include: AgentDecisionIncludeObjectSchema.optional(), data: z.union([AgentDecisionUpdateInputObjectSchema, AgentDecisionUncheckedUpdateInputObjectSchema]), where: AgentDecisionWhereUniqueInputObjectSchema }).strict();