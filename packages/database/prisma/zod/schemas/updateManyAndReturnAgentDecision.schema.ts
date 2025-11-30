import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionSelectObjectSchema as AgentDecisionSelectObjectSchema } from './objects/AgentDecisionSelect.schema';
import { AgentDecisionUpdateManyMutationInputObjectSchema as AgentDecisionUpdateManyMutationInputObjectSchema } from './objects/AgentDecisionUpdateManyMutationInput.schema';
import { AgentDecisionWhereInputObjectSchema as AgentDecisionWhereInputObjectSchema } from './objects/AgentDecisionWhereInput.schema';

export const AgentDecisionUpdateManyAndReturnSchema: z.ZodType<Prisma.AgentDecisionUpdateManyAndReturnArgs> = z.object({ select: AgentDecisionSelectObjectSchema.optional(), data: AgentDecisionUpdateManyMutationInputObjectSchema, where: AgentDecisionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgentDecisionUpdateManyAndReturnArgs>;

export const AgentDecisionUpdateManyAndReturnZodSchema = z.object({ select: AgentDecisionSelectObjectSchema.optional(), data: AgentDecisionUpdateManyMutationInputObjectSchema, where: AgentDecisionWhereInputObjectSchema.optional() }).strict();