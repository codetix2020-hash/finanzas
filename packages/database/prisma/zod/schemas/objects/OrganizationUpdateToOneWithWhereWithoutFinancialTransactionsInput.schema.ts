import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema as OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUpdateWithoutFinancialTransactionsInput.schema';
import { OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema as OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutFinancialTransactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutFinancialTransactionsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutFinancialTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutFinancialTransactionsInput>;
export const OrganizationUpdateToOneWithWhereWithoutFinancialTransactionsInputObjectZodSchema = makeSchema();
