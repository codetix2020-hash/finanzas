import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutCostTrackingsInputObjectSchema as OrganizationUpdateWithoutCostTrackingsInputObjectSchema } from './OrganizationUpdateWithoutCostTrackingsInput.schema';
import { OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema as OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutCostTrackingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutCostTrackingsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutCostTrackingsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutCostTrackingsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutCostTrackingsInput>;
export const OrganizationUpdateToOneWithWhereWithoutCostTrackingsInputObjectZodSchema = makeSchema();
