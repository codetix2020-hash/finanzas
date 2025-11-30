import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateWithoutOrganizationInputObjectSchema as FinancialTransactionCreateWithoutOrganizationInputObjectSchema } from './FinancialTransactionCreateWithoutOrganizationInput.schema';
import { FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema as FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FinancialTransactionCreateWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.FinancialTransactionCreateOrConnectWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionCreateOrConnectWithoutOrganizationInput>;
export const FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectZodSchema = makeSchema();
