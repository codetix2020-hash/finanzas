import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional()
}).strict();
export const CostTrackingIncludeObjectSchema: z.ZodType<Prisma.CostTrackingInclude> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingInclude>;
export const CostTrackingIncludeObjectZodSchema = makeSchema();
