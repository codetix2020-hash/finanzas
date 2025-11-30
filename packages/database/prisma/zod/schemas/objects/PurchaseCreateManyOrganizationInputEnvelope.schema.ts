import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseCreateManyOrganizationInputObjectSchema as PurchaseCreateManyOrganizationInputObjectSchema } from './PurchaseCreateManyOrganizationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PurchaseCreateManyOrganizationInputObjectSchema), z.lazy(() => PurchaseCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PurchaseCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.PurchaseCreateManyOrganizationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateManyOrganizationInputEnvelope>;
export const PurchaseCreateManyOrganizationInputEnvelopeObjectZodSchema = makeSchema();
