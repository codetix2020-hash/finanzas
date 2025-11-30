import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { FinancialTransactionCreateWithoutOrganizationInputObjectSchema as FinancialTransactionCreateWithoutOrganizationInputObjectSchema } from './FinancialTransactionCreateWithoutOrganizationInput.schema';
import { FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema as FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutOrganizationInput.schema';
import { FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema as FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutOrganizationInput.schema';
import { FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema as FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { FinancialTransactionCreateManyOrganizationInputEnvelopeObjectSchema as FinancialTransactionCreateManyOrganizationInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyOrganizationInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema as FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { FinancialTransactionUpdateManyWithWhereWithoutOrganizationInputObjectSchema as FinancialTransactionUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './FinancialTransactionUpdateManyWithWhereWithoutOrganizationInput.schema';
import { FinancialTransactionScalarWhereInputObjectSchema as FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FinancialTransactionCreateWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FinancialTransactionCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema), z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema), z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema), z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema), z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FinancialTransactionUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => FinancialTransactionUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema), z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FinancialTransactionUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.FinancialTransactionUncheckedUpdateManyWithoutOrganizationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FinancialTransactionUncheckedUpdateManyWithoutOrganizationNestedInput>;
export const FinancialTransactionUncheckedUpdateManyWithoutOrganizationNestedInputObjectZodSchema = makeSchema();
