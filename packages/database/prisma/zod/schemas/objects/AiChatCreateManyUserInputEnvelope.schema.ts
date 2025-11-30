import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatCreateManyUserInputObjectSchema as AiChatCreateManyUserInputObjectSchema } from './AiChatCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AiChatCreateManyUserInputObjectSchema), z.lazy(() => AiChatCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AiChatCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AiChatCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateManyUserInputEnvelope>;
export const AiChatCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
