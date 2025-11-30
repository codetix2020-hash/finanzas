import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AgentDecisionSelectObjectSchema as AgentDecisionSelectObjectSchema } from './objects/AgentDecisionSelect.schema';
import { AgentDecisionIncludeObjectSchema as AgentDecisionIncludeObjectSchema } from './objects/AgentDecisionInclude.schema';
import { AgentDecisionCreateInputObjectSchema as AgentDecisionCreateInputObjectSchema } from './objects/AgentDecisionCreateInput.schema';
import { AgentDecisionUncheckedCreateInputObjectSchema as AgentDecisionUncheckedCreateInputObjectSchema } from './objects/AgentDecisionUncheckedCreateInput.schema';

export const AgentDecisionCreateOneSchema: z.ZodType<Prisma.AgentDecisionCreateArgs> = z.object({ select: AgentDecisionSelectObjectSchema.optional(), include: AgentDecisionIncludeObjectSchema.optional(), data: z.union([AgentDecisionCreateInputObjectSchema, AgentDecisionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AgentDecisionCreateArgs>;

export const AgentDecisionCreateOneZodSchema = z.object({ select: AgentDecisionSelectObjectSchema.optional(), include: AgentDecisionIncludeObjectSchema.optional(), data: z.union([AgentDecisionCreateInputObjectSchema, AgentDecisionUncheckedCreateInputObjectSchema]) }).strict();