import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutFinancialTransactionsInputObjectSchema as OrganizationCreateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationCreateWithoutFinancialTransactionsInput.schema';
import { OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema as OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { OrganizationCreateOrConnectWithoutFinancialTransactionsInputObjectSchema as OrganizationCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './OrganizationCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutFinancialTransactionsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutFinancialTransactionsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutFinancialTransactionsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutFinancialTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutFinancialTransactionsInput>;
export const OrganizationCreateNestedOneWithoutFinancialTransactionsInputObjectZodSchema = makeSchema();
