import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './AgentDecisionWhereUniqueInput.schema';
import { AgentDecisionCreateWithoutOrganizationInputObjectSchema as AgentDecisionCreateWithoutOrganizationInputObjectSchema } from './AgentDecisionCreateWithoutOrganizationInput.schema';
import { AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema as AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema } from './AgentDecisionUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgentDecisionCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AgentDecisionCreateOrConnectWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionCreateOrConnectWithoutOrganizationInput>;
export const AgentDecisionCreateOrConnectWithoutOrganizationInputObjectZodSchema = makeSchema();
