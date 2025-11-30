import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './AgentDecisionWhereUniqueInput.schema';
import { AgentDecisionUpdateWithoutOrganizationInputObjectSchema as AgentDecisionUpdateWithoutOrganizationInputObjectSchema } from './AgentDecisionUpdateWithoutOrganizationInput.schema';
import { AgentDecisionUncheckedUpdateWithoutOrganizationInputObjectSchema as AgentDecisionUncheckedUpdateWithoutOrganizationInputObjectSchema } from './AgentDecisionUncheckedUpdateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgentDecisionUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInput>;
export const AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
