import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseCreateManyUserInputObjectSchema as PurchaseCreateManyUserInputObjectSchema } from './PurchaseCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PurchaseCreateManyUserInputObjectSchema), z.lazy(() => PurchaseCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PurchaseCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.PurchaseCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateManyUserInputEnvelope>;
export const PurchaseCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
