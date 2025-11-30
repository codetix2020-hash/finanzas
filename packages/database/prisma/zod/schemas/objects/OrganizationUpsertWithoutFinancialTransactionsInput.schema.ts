import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema as OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUpdateWithoutFinancialTransactionsInput.schema';
import { OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema as OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutFinancialTransactionsInput.schema';
import { OrganizationCreateWithoutFinancialTransactionsInputObjectSchema as OrganizationCreateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationCreateWithoutFinancialTransactionsInput.schema';
import { OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema as OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutFinancialTransactionsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutFinancialTransactionsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutFinancialTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutFinancialTransactionsInput>;
export const OrganizationUpsertWithoutFinancialTransactionsInputObjectZodSchema = makeSchema();
