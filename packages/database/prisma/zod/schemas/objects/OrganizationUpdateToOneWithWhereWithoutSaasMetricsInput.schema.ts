import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutSaasMetricsInputObjectSchema as OrganizationUpdateWithoutSaasMetricsInputObjectSchema } from './OrganizationUpdateWithoutSaasMetricsInput.schema';
import { OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema as OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutSaasMetricsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutSaasMetricsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutSaasMetricsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutSaasMetricsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutSaasMetricsInput>;
export const OrganizationUpdateToOneWithWhereWithoutSaasMetricsInputObjectZodSchema = makeSchema();
