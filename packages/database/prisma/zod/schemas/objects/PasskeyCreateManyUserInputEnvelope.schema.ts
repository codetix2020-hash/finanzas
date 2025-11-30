import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyCreateManyUserInputObjectSchema as PasskeyCreateManyUserInputObjectSchema } from './PasskeyCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PasskeyCreateManyUserInputObjectSchema), z.lazy(() => PasskeyCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PasskeyCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.PasskeyCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyCreateManyUserInputEnvelope>;
export const PasskeyCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
