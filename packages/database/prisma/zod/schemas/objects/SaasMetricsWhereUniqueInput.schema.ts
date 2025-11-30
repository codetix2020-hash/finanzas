import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SaasMetricsOrganizationIdDateCompoundUniqueInputObjectSchema as SaasMetricsOrganizationIdDateCompoundUniqueInputObjectSchema } from './SaasMetricsOrganizationIdDateCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId_date: z.lazy(() => SaasMetricsOrganizationIdDateCompoundUniqueInputObjectSchema).optional()
}).strict();
export const SaasMetricsWhereUniqueInputObjectSchema: z.ZodType<Prisma.SaasMetricsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsWhereUniqueInput>;
export const SaasMetricsWhereUniqueInputObjectZodSchema = makeSchema();
