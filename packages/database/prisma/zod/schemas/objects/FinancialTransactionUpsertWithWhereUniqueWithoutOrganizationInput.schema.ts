import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutOrganizationInputObjectSchema as FinancialTransactionUpdateWithoutOrganizationInputObjectSchema } from './FinancialTransactionUpdateWithoutOrganizationInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutOrganizationInputObjectSchema as FinancialTransactionUncheckedUpdateWithoutOrganizationInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutOrganizationInput.schema';
import { FinancialTransactionCreateWithoutOrganizationInputObjectSchema as FinancialTransactionCreateWithoutOrganizationInputObjectSchema } from './FinancialTransactionCreateWithoutOrganizationInput.schema';
import { FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema as FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FinancialTransactionUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => FinancialTransactionCreateWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInput>;
export const FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
