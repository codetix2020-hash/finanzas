import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingWhereUniqueInputObjectSchema as CostTrackingWhereUniqueInputObjectSchema } from './CostTrackingWhereUniqueInput.schema';
import { CostTrackingUpdateWithoutOrganizationInputObjectSchema as CostTrackingUpdateWithoutOrganizationInputObjectSchema } from './CostTrackingUpdateWithoutOrganizationInput.schema';
import { CostTrackingUncheckedUpdateWithoutOrganizationInputObjectSchema as CostTrackingUncheckedUpdateWithoutOrganizationInputObjectSchema } from './CostTrackingUncheckedUpdateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CostTrackingWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CostTrackingUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => CostTrackingUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const CostTrackingUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.CostTrackingUpdateWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingUpdateWithWhereUniqueWithoutOrganizationInput>;
export const CostTrackingUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
