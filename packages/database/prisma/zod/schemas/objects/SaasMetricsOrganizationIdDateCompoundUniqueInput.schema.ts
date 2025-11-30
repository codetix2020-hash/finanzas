import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  organizationId: z.string(),
  date: z.date()
}).strict();
export const SaasMetricsOrganizationIdDateCompoundUniqueInputObjectSchema: z.ZodType<Prisma.SaasMetricsOrganizationIdDateCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsOrganizationIdDateCompoundUniqueInput>;
export const SaasMetricsOrganizationIdDateCompoundUniqueInputObjectZodSchema = makeSchema();
