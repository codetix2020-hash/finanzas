import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionScalarWhereInputObjectSchema as AgentDecisionScalarWhereInputObjectSchema } from './AgentDecisionScalarWhereInput.schema';
import { AgentDecisionUpdateManyMutationInputObjectSchema as AgentDecisionUpdateManyMutationInputObjectSchema } from './AgentDecisionUpdateManyMutationInput.schema';
import { AgentDecisionUncheckedUpdateManyWithoutOrganizationInputObjectSchema as AgentDecisionUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './AgentDecisionUncheckedUpdateManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentDecisionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgentDecisionUpdateManyMutationInputObjectSchema), z.lazy(() => AgentDecisionUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const AgentDecisionUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AgentDecisionUpdateManyWithWhereWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionUpdateManyWithWhereWithoutOrganizationInput>;
export const AgentDecisionUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = makeSchema();
