import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingCreateManyOrganizationInputObjectSchema as CostTrackingCreateManyOrganizationInputObjectSchema } from './CostTrackingCreateManyOrganizationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CostTrackingCreateManyOrganizationInputObjectSchema), z.lazy(() => CostTrackingCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CostTrackingCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.CostTrackingCreateManyOrganizationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingCreateManyOrganizationInputEnvelope>;
export const CostTrackingCreateManyOrganizationInputEnvelopeObjectZodSchema = makeSchema();
