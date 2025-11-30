import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutSaasMetricsInputObjectSchema as OrganizationCreateWithoutSaasMetricsInputObjectSchema } from './OrganizationCreateWithoutSaasMetricsInput.schema';
import { OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema as OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema } from './OrganizationUncheckedCreateWithoutSaasMetricsInput.schema';
import { OrganizationCreateOrConnectWithoutSaasMetricsInputObjectSchema as OrganizationCreateOrConnectWithoutSaasMetricsInputObjectSchema } from './OrganizationCreateOrConnectWithoutSaasMetricsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutSaasMetricsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutSaasMetricsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutSaasMetricsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutSaasMetricsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutSaasMetricsInput>;
export const OrganizationCreateNestedOneWithoutSaasMetricsInputObjectZodSchema = makeSchema();
