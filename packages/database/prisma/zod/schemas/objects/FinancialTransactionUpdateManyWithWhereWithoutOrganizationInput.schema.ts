import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionScalarWhereInputObjectSchema as FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';
import { FinancialTransactionUpdateManyMutationInputObjectSchema as FinancialTransactionUpdateManyMutationInputObjectSchema } from './FinancialTransactionUpdateManyMutationInput.schema';
import { FinancialTransactionUncheckedUpdateManyWithoutOrganizationInputObjectSchema as FinancialTransactionUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './FinancialTransactionUncheckedUpdateManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FinancialTransactionUpdateManyMutationInputObjectSchema), z.lazy(() => FinancialTransactionUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const FinancialTransactionUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.FinancialTransactionUpdateManyWithWhereWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionUpdateManyWithWhereWithoutOrganizationInput>;
export const FinancialTransactionUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = makeSchema();
