import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorCreateManyUserInputObjectSchema as TwoFactorCreateManyUserInputObjectSchema } from './TwoFactorCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TwoFactorCreateManyUserInputObjectSchema), z.lazy(() => TwoFactorCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TwoFactorCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TwoFactorCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCreateManyUserInputEnvelope>;
export const TwoFactorCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
