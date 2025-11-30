import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutSaasMetricsInputObjectSchema as OrganizationCreateWithoutSaasMetricsInputObjectSchema } from './OrganizationCreateWithoutSaasMetricsInput.schema';
import { OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema as OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema } from './OrganizationUncheckedCreateWithoutSaasMetricsInput.schema';
import { OrganizationCreateOrConnectWithoutSaasMetricsInputObjectSchema as OrganizationCreateOrConnectWithoutSaasMetricsInputObjectSchema } from './OrganizationCreateOrConnectWithoutSaasMetricsInput.schema';
import { OrganizationUpsertWithoutSaasMetricsInputObjectSchema as OrganizationUpsertWithoutSaasMetricsInputObjectSchema } from './OrganizationUpsertWithoutSaasMetricsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutSaasMetricsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutSaasMetricsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutSaasMetricsInput.schema';
import { OrganizationUpdateWithoutSaasMetricsInputObjectSchema as OrganizationUpdateWithoutSaasMetricsInputObjectSchema } from './OrganizationUpdateWithoutSaasMetricsInput.schema';
import { OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema as OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutSaasMetricsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutSaasMetricsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutSaasMetricsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutSaasMetricsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutSaasMetricsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutSaasMetricsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutSaasMetricsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutSaasMetricsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneRequiredWithoutSaasMetricsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutSaasMetricsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutSaasMetricsNestedInput>;
export const OrganizationUpdateOneRequiredWithoutSaasMetricsNestedInputObjectZodSchema = makeSchema();
