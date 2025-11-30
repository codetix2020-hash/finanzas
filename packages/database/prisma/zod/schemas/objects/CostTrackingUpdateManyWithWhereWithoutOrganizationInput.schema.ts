import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingScalarWhereInputObjectSchema as CostTrackingScalarWhereInputObjectSchema } from './CostTrackingScalarWhereInput.schema';
import { CostTrackingUpdateManyMutationInputObjectSchema as CostTrackingUpdateManyMutationInputObjectSchema } from './CostTrackingUpdateManyMutationInput.schema';
import { CostTrackingUncheckedUpdateManyWithoutOrganizationInputObjectSchema as CostTrackingUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './CostTrackingUncheckedUpdateManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CostTrackingScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CostTrackingUpdateManyMutationInputObjectSchema), z.lazy(() => CostTrackingUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const CostTrackingUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.CostTrackingUpdateManyWithWhereWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingUpdateManyWithWhereWithoutOrganizationInput>;
export const CostTrackingUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = makeSchema();
