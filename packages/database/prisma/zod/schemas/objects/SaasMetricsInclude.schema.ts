import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional()
}).strict();
export const SaasMetricsIncludeObjectSchema: z.ZodType<Prisma.SaasMetricsInclude> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsInclude>;
export const SaasMetricsIncludeObjectZodSchema = makeSchema();
