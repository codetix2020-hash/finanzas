import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AgentDecisionWhereUniqueInputObjectSchema: z.ZodType<Prisma.AgentDecisionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionWhereUniqueInput>;
export const AgentDecisionWhereUniqueInputObjectZodSchema = makeSchema();
