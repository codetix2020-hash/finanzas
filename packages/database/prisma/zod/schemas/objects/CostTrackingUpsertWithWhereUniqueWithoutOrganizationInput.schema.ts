import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './CostTrackingWhereUniqueInput.schema';
import { CostTrackingUpdateWithoutOrganizationInputObjectSchema as CostTrackingUpdateWithoutOrganizationInputObjectSchema } from './CostTrackingUpdateWithoutOrganizationInput.schema';
import { CostTrackingUncheckedUpdateWithoutOrganizationInputObjectSchema as CostTrackingUncheckedUpdateWithoutOrganizationInputObjectSchema } from './CostTrackingUncheckedUpdateWithoutOrganizationInput.schema';
import { CostTrackingCreateWithoutOrganizationInputObjectSchema as CostTrackingCreateWithoutOrganizationInputObjectSchema } from './CostTrackingCreateWithoutOrganizationInput.schema';
import { CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema as CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema } from './CostTrackingUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CostTrackingWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CostTrackingUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => CostTrackingCreateWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const CostTrackingUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.CostTrackingUpsertWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingUpsertWithWhereUniqueWithoutOrganizationInput>;
export const CostTrackingUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
