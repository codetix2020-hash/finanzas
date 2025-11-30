import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema'

const makeSchema = () => z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional()
}).strict();
export const FinancialTransactionIncludeObjectSchema: z.ZodType<Prisma.FinancialTransactionInclude> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionInclude>;
export const FinancialTransactionIncludeObjectZodSchema = makeSchema();
