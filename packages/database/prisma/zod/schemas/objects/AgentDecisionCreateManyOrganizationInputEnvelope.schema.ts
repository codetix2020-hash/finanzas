import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AgentDecisionCreateManyOrganizationInputObjectSchema as AgentDecisionCreateManyOrganizationInputObjectSchema } from './AgentDecisionCreateManyOrganizationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AgentDecisionCreateManyOrganizationInputObjectSchema), z.lazy(() => AgentDecisionCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AgentDecisionCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.AgentDecisionCreateManyOrganizationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionCreateManyOrganizationInputEnvelope>;
export const AgentDecisionCreateManyOrganizationInputEnvelopeObjectZodSchema = makeSchema();
