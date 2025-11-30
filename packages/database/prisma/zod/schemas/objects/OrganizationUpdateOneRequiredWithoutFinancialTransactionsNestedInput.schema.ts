import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutFinancialTransactionsInputObjectSchema as OrganizationCreateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationCreateWithoutFinancialTransactionsInput.schema';
import { OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema as OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { OrganizationCreateOrConnectWithoutFinancialTransactionsInputObjectSchema as OrganizationCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './OrganizationCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { OrganizationUpsertWithoutFinancialTransactionsInputObjectSchema as OrganizationUpsertWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUpsertWithoutFinancialTransactionsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutFinancialTransactionsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutFinancialTransactionsInput.schema';
import { OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema as OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUpdateWithoutFinancialTransactionsInput.schema';
import { OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema as OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutFinancialTransactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutFinancialTransactionsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutFinancialTransactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutFinancialTransactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutFinancialTransactionsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutFinancialTransactionsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutFinancialTransactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutFinancialTransactionsNestedInput>;
export const OrganizationUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectZodSchema = makeSchema();
