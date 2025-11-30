import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutCostTrackingsInputObjectSchema as OrganizationCreateWithoutCostTrackingsInputObjectSchema } from './OrganizationCreateWithoutCostTrackingsInput.schema';
import { OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema as OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema } from './OrganizationUncheckedCreateWithoutCostTrackingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutCostTrackingsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutCostTrackingsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutCostTrackingsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutCostTrackingsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutCostTrackingsInput>;
export const OrganizationCreateOrConnectWithoutCostTrackingsInputObjectZodSchema = makeSchema();
