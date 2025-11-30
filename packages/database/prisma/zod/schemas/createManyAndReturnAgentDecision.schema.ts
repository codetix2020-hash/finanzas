import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionSelectObjectSchema as AgentDecisionSelectObjectSchema } from './objects/AgentDecisionSelect.schema';
import { AgentDecisionCreateManyInputObjectSchema as AgentDecisionCreateManyInputObjectSchema } from './objects/AgentDecisionCreateManyInput.schema';

export const AgentDecisionCreateManyAndReturnSchema: z.ZodType<Prisma.AgentDecisionCreateManyAndReturnArgs> = z.object({ select: AgentDecisionSelectObjectSchema.optional(), data: z.union([ AgentDecisionCreateManyInputObjectSchema, z.array(AgentDecisionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AgentDecisionCreateManyAndReturnArgs>;

export const AgentDecisionCreateManyAndReturnZodSchema = z.object({ select: AgentDecisionSelectObjectSchema.optional(), data: z.union([ AgentDecisionCreateManyInputObjectSchema, z.array(AgentDecisionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();