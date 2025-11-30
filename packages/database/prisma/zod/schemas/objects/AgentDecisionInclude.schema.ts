import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional()
}).strict();
export const AgentDecisionIncludeObjectSchema: z.ZodType<Prisma.AgentDecisionInclude> = makeSchema() as unknown as z.ZodType<Prisma.AgentDecisionInclude>;
export const AgentDecisionIncludeObjectZodSchema = makeSchema();
