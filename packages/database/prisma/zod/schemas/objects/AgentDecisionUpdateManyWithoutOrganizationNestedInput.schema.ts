import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionCreateWithoutOrganizationInputObjectSchema as AgentDecisionCreateWithoutOrganizationInputObjectSchema } from './AgentDecisionCreateWithoutOrganizationInput.schema';
import { AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema as AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema } from './AgentDecisionUncheckedCreateWithoutOrganizationInput.schema';
import { AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema as AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema } from './AgentDecisionCreateOrConnectWithoutOrganizationInput.schema';
import { AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema as AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { AgentDecisionCreateManyOrganizationInputEnvelopeObjectSchema as AgentDecisionCreateManyOrganizationInputEnvelopeObjectSchema } from './AgentDecisionCreateManyOrganizationInputEnvelope.schema';
import { AgentDecisionWhereUniqueInputObjectSchema as AgentDecisionWhereUniqueInputObjectSchema } from './AgentDecisionWhereUniqueInput.schema';
import { AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema as AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { AgentDecisionUpdateManyWithWhereWithoutOrganizationInputObjectSchema as AgentDecisionUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './AgentDecisionUpdateManyWithWhereWithoutOrganizationInput.schema';
import { AgentDecisionScalarWhereInputObjectSchema as AgentDecisionScalarWhereInputObjectSchema } from './AgentDecisionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentDecisionCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AgentDecisionCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema), z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema), z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema), z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema), z.lazy(() => AgentDecisionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgentDecisionUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => AgentDecisionUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgentDecisionScalarWhereInputObjectSchema), z.lazy(() => AgentDecisionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgentDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.AgentDecisionUpdateManyWithoutOrganizationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionUpdateManyWithoutOrganizationNestedInput>;
export const AgentDecisionUpdateManyWithoutOrganizationNestedInputObjectZodSchema = makeSchema();
