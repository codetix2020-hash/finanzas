import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionCreateManyOrganizationInputObjectSchema as FinancialTransactionCreateManyOrganizationInputObjectSchema } from './FinancialTransactionCreateManyOrganizationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FinancialTransactionCreateManyOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionCreateManyOrganizationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FinancialTransactionCreateManyOrganizationInputEnvelopeObjectSchema: z.ZodType<Prisma.FinancialTransactionCreateManyOrganizationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionCreateManyOrganizationInputEnvelope>;
export const FinancialTransactionCreateManyOrganizationInputEnvelopeObjectZodSchema = makeSchema();
