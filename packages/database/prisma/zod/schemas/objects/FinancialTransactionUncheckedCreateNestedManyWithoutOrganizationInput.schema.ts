import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionCreateWithoutOrganizationInputObjectSchema as FinancialTransactionCreateWithoutOrganizationInputObjectSchema } from './FinancialTransactionCreateWithoutOrganizationInput.schema';
import { FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema as FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutOrganizationInput.schema';
import { FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema as FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutOrganizationInput.schema';
import { FinancialTransactionCreateManyOrganizationInputEnvelopeObjectSchema as FinancialTransactionCreateManyOrganizationInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyOrganizationInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FinancialTransactionCreateWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FinancialTransactionCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema), z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FinancialTransactionUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.FinancialTransactionUncheckedCreateNestedManyWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionUncheckedCreateNestedManyWithoutOrganizationInput>;
export const FinancialTransactionUncheckedCreateNestedManyWithoutOrganizationInputObjectZodSchema = makeSchema();
