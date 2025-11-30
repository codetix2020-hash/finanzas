import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutFinancialTransactionsInputObjectSchema as OrganizationCreateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationCreateWithoutFinancialTransactionsInput.schema';
import { OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema as OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUncheckedCreateWithoutFinancialTransactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutFinancialTransactionsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutFinancialTransactionsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutFinancialTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutFinancialTransactionsInput>;
export const OrganizationCreateOrConnectWithoutFinancialTransactionsInputObjectZodSchema = makeSchema();
