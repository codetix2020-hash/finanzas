import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationUpdateWithoutCostTrackingsInputObjectSchema as OrganizationUpdateWithoutCostTrackingsInputObjectSchema } from './OrganizationUpdateWithoutCostTrackingsInput.schema';
import { OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema as OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutCostTrackingsInput.schema';
import { OrganizationCreateWithoutCostTrackingsInputObjectSchema as OrganizationCreateWithoutCostTrackingsInputObjectSchema } from './OrganizationCreateWithoutCostTrackingsInput.schema';
import { OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema as OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema } from './OrganizationUncheckedCreateWithoutCostTrackingsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutCostTrackingsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutCostTrackingsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutCostTrackingsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutCostTrackingsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutCostTrackingsInput>;
export const OrganizationUpsertWithoutCostTrackingsInputObjectZodSchema = makeSchema();
