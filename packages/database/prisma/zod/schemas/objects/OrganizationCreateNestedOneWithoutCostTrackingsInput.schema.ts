import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutCostTrackingsInputObjectSchema as OrganizationCreateWithoutCostTrackingsInputObjectSchema } from './OrganizationCreateWithoutCostTrackingsInput.schema';
import { OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema as OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema } from './OrganizationUncheckedCreateWithoutCostTrackingsInput.schema';
import { OrganizationCreateOrConnectWithoutCostTrackingsInputObjectSchema as OrganizationCreateOrConnectWithoutCostTrackingsInputObjectSchema } from './OrganizationCreateOrConnectWithoutCostTrackingsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutCostTrackingsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutCostTrackingsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutCostTrackingsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutCostTrackingsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutCostTrackingsInput>;
export const OrganizationCreateNestedOneWithoutCostTrackingsInputObjectZodSchema = makeSchema();
