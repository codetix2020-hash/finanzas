import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutOrganizationInputObjectSchema as FinancialTransactionUpdateWithoutOrganizationInputObjectSchema } from './FinancialTransactionUpdateWithoutOrganizationInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutOrganizationInputObjectSchema as FinancialTransactionUncheckedUpdateWithoutOrganizationInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FinancialTransactionUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInput>;
export const FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
