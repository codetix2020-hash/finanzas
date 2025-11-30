import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionUpdateManyMutationInputObjectSchema as AgentDecisionUpdateManyMutationInputObjectSchema } from './objects/AgentDecisionUpdateManyMutationInput.schema';
import { AgentDecisionWhereInputObjectSchema as AgentDecisionWhereInputObjectSchema } from './objects/AgentDecisionWhereInput.schema';

export const AgentDecisionUpdateManySchema: z.ZodType<Prisma.AgentDecisionUpdateManyArgs> = z.object({ data: AgentDecisionUpdateManyMutationInputObjectSchema, where: AgentDecisionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgentDecisionUpdateManyArgs>;

export const AgentDecisionUpdateManyZodSchema = z.object({ data: AgentDecisionUpdateManyMutationInputObjectSchema, where: AgentDecisionWhereInputObjectSchema.optional() }).strict();