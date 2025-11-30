import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionCreateManyInputObjectSchema as AgentDecisionCreateManyInputObjectSchema } from './objects/AgentDecisionCreateManyInput.schema';

export const AgentDecisionCreateManySchema: z.ZodType<Prisma.AgentDecisionCreateManyArgs> = z.object({ data: z.union([ AgentDecisionCreateManyInputObjectSchema, z.array(AgentDecisionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgentDecisionCreateManyArgs>;

export const AgentDecisionCreateManyZodSchema = z.object({ data: z.union([ AgentDecisionCreateManyInputObjectSchema, z.array(AgentDecisionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();