import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatCreateManyOrganizationInputObjectSchema as AiChatCreateManyOrganizationInputObjectSchema } from './AiChatCreateManyOrganizationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AiChatCreateManyOrganizationInputObjectSchema), z.lazy(() => AiChatCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AiChatCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.AiChatCreateManyOrganizationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateManyOrganizationInputEnvelope>;
export const AiChatCreateManyOrganizationInputEnvelopeObjectZodSchema = makeSchema();
