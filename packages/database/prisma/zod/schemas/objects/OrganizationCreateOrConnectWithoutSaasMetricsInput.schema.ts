import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutSaasMetricsInputObjectSchema as OrganizationCreateWithoutSaasMetricsInputObjectSchema } from './OrganizationCreateWithoutSaasMetricsInput.schema';
import { OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema as OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema } from './OrganizationUncheckedCreateWithoutSaasMetricsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutSaasMetricsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutSaasMetricsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutSaasMetricsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutSaasMetricsInput>;
export const OrganizationCreateOrConnectWithoutSaasMetricsInputObjectZodSchema = makeSchema();
