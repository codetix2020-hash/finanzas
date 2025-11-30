import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingCreateWithoutOrganizationInputObjectSchema as CostTrackingCreateWithoutOrganizationInputObjectSchema } from './CostTrackingCreateWithoutOrganizationInput.schema';
import { CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema as CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema } from './CostTrackingUncheckedCreateWithoutOrganizationInput.schema';
import { CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema as CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema } from './CostTrackingCreateOrConnectWithoutOrganizationInput.schema';
import { CostTrackingCreateManyOrganizationInputEnvelopeObjectSchema as CostTrackingCreateManyOrganizationInputEnvelopeObjectSchema } from './CostTrackingCreateManyOrganizationInputEnvelope.schema';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './CostTrackingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CostTrackingCreateWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CostTrackingCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CostTrackingWhereUniqueInputObjectSchema), z.lazy(() => CostTrackingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CostTrackingCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.CostTrackingCreateNestedManyWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingCreateNestedManyWithoutOrganizationInput>;
export const CostTrackingCreateNestedManyWithoutOrganizationInputObjectZodSchema = makeSchema();
