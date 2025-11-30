import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationUpdateWithoutSaasMetricsInputObjectSchema as OrganizationUpdateWithoutSaasMetricsInputObjectSchema } from './OrganizationUpdateWithoutSaasMetricsInput.schema';
import { OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema as OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutSaasMetricsInput.schema';
import { OrganizationCreateWithoutSaasMetricsInputObjectSchema as OrganizationCreateWithoutSaasMetricsInputObjectSchema } from './OrganizationCreateWithoutSaasMetricsInput.schema';
import { OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema as OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema } from './OrganizationUncheckedCreateWithoutSaasMetricsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutSaasMetricsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutSaasMetricsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutSaasMetricsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutSaasMetricsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutSaasMetricsInput>;
export const OrganizationUpsertWithoutSaasMetricsInputObjectZodSchema = makeSchema();
