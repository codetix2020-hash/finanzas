import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionSelectObjectSchema as AgentDecisionSelectObjectSchema } from './objects/AgentDecisionSelect.schema';
import { AgentDecisionIncludeObjectSchema as AgentDecisionIncludeObjectSchema } from './objects/AgentDecisionInclude.schema';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './objects/AgentDecisionWhereUniqueInput.schema';
import { AgentDecisionCreateInputObjectSchema as AgentDecisionCreateInputObjectSchema } from './objects/AgentDecisionCreateInput.schema';
import { AgentDecisionUncheckedCreateInputObjectSchema as AgentDecisionUncheckedCreateInputObjectSchema } from './objects/AgentDecisionUncheckedCreateInput.schema';
import { AgentDecisionUpdateInputObjectSchema as AgentDecisionUpdateInputObjectSchema } from './objects/AgentDecisionUpdateInput.schema';
import { AgentDecisionUncheckedUpdateInputObjectSchema as AgentDecisionUncheckedUpdateInputObjectSchema } from './objects/AgentDecisionUncheckedUpdateInput.schema';

export const AgentDecisionUpsertOneSchema: z.ZodType<Prisma.AgentDecisionUpsertArgs> = z.object({ select: AgentDecisionSelectObjectSchema.optional(), include: AgentDecisionIncludeObjectSchema.optional(), where: AgentDecisionWhereUniqueInputObjectSchema, create: z.union([ AgentDecisionCreateInputObjectSchema, AgentDecisionUncheckedCreateInputObjectSchema ]), update: z.union([ AgentDecisionUpdateInputObjectSchema, AgentDecisionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AgentDecisionUpsertArgs>;

export const AgentDecisionUpsertOneZodSchema = z.object({ select: AgentDecisionSelectObjectSchema.optional(), include: AgentDecisionIncludeObjectSchema.optional(), where: AgentDecisionWhereUniqueInputObjectSchema, create: z.union([ AgentDecisionCreateInputObjectSchema, AgentDecisionUncheckedCreateInputObjectSchema ]), update: z.union([ AgentDecisionUpdateInputObjectSchema, AgentDecisionUncheckedUpdateInputObjectSchema ]) }).strict();