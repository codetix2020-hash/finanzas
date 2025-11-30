import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutCostTrackingsInputObjectSchema as OrganizationCreateWithoutCostTrackingsInputObjectSchema } from './OrganizationCreateWithoutCostTrackingsInput.schema';
import { OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema as OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema } from './OrganizationUncheckedCreateWithoutCostTrackingsInput.schema';
import { OrganizationCreateOrConnectWithoutCostTrackingsInputObjectSchema as OrganizationCreateOrConnectWithoutCostTrackingsInputObjectSchema } from './OrganizationCreateOrConnectWithoutCostTrackingsInput.schema';
import { OrganizationUpsertWithoutCostTrackingsInputObjectSchema as OrganizationUpsertWithoutCostTrackingsInputObjectSchema } from './OrganizationUpsertWithoutCostTrackingsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutCostTrackingsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutCostTrackingsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutCostTrackingsInput.schema';
import { OrganizationUpdateWithoutCostTrackingsInputObjectSchema as OrganizationUpdateWithoutCostTrackingsInputObjectSchema } from './OrganizationUpdateWithoutCostTrackingsInput.schema';
import { OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema as OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutCostTrackingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutCostTrackingsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutCostTrackingsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutCostTrackingsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutCostTrackingsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutCostTrackingsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneRequiredWithoutCostTrackingsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutCostTrackingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutCostTrackingsNestedInput>;
export const OrganizationUpdateOneRequiredWithoutCostTrackingsNestedInputObjectZodSchema = makeSchema();
