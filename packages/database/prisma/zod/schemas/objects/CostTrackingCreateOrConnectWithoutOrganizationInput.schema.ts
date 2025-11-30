import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './CostTrackingWhereUniqueInput.schema';
import { CostTrackingCreateWithoutOrganizationInputObjectSchema as CostTrackingCreateWithoutOrganizationInputObjectSchema } from './CostTrackingCreateWithoutOrganizationInput.schema';
import { CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema as CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema } from './CostTrackingUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CostTrackingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CostTrackingCreateWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const CostTrackingCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.CostTrackingCreateOrConnectWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingCreateOrConnectWithoutOrganizationInput>;
export const CostTrackingCreateOrConnectWithoutOrganizationInputObjectZodSchema = makeSchema();
