import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionCreateWithoutOrganizationInputObjectSchema as AgentDecisionCreateWithoutOrganizationInputObjectSchema } from './AgentDecisionCreateWithoutOrganizationInput.schema';
import { AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema as AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema } from './AgentDecisionUncheckedCreateWithoutOrganizationInput.schema';
import { AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema as AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema } from './AgentDecisionCreateOrConnectWithoutOrganizationInput.schema';
import { AgentDecisionCreateManyOrganizationInputEnvelopeObjectSchema as AgentDecisionCreateManyOrganizationInputEnvelopeObjectSchema } from './AgentDecisionCreateManyOrganizationInputEnvelope.schema';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './AgentDecisionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentDecisionCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgentDecisionCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema), z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgentDecisionCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AgentDecisionCreateNestedManyWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionCreateNestedManyWithoutOrganizationInput>;
export const AgentDecisionCreateNestedManyWithoutOrganizationInputObjectZodSchema = makeSchema();
