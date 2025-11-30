import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionWhereInputObjectSchema as AgentDecisionWhereInputObjectSchema } from './objects/AgentDecisionWhereInput.schema';

export const AgentDecisionDeleteManySchema: z.ZodType<Prisma.AgentDecisionDeleteManyArgs> = z.object({ where: AgentDecisionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgentDecisionDeleteManyArgs>;

export const AgentDecisionDeleteManyZodSchema = z.object({ where: AgentDecisionWhereInputObjectSchema.optional() }).strict();