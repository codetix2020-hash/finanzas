import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './AgentDecisionWhereUniqueInput.schema';
import { AgentDecisionUpdateWithoutOrganizationInputObjectSchema as AgentDecisionUpdateWithoutOrganizationInputObjectSchema } from './AgentDecisionUpdateWithoutOrganizationInput.schema';
import { AgentDecisionUncheckedUpdateWithoutOrganizationInputObjectSchema as AgentDecisionUncheckedUpdateWithoutOrganizationInputObjectSchema } from './AgentDecisionUncheckedUpdateWithoutOrganizationInput.schema';
import { AgentDecisionCreateWithoutOrganizationInputObjectSchema as AgentDecisionCreateWithoutOrganizationInputObjectSchema } from './AgentDecisionCreateWithoutOrganizationInput.schema';
import { AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema as AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema } from './AgentDecisionUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgentDecisionUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => AgentDecisionCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInput>;
export const AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
