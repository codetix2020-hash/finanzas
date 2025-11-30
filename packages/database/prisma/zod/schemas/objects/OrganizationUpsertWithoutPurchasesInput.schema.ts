import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationUpdateWithoutPurchasesInputObjectSchema as OrganizationUpdateWithoutPurchasesInputObjectSchema } from './OrganizationUpdateWithoutPurchasesInput.schema';
import { OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema as OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutPurchasesInput.schema';
import { OrganizationCreateWithoutPurchasesInputObjectSchema as OrganizationCreateWithoutPurchasesInputObjectSchema } from './OrganizationCreateWithoutPurchasesInput.schema';
import { OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema as OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema } from './OrganizationUncheckedCreateWithoutPurchasesInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutPurchasesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutPurchasesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutPurchasesInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutPurchasesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutPurchasesInput>;
export const OrganizationUpsertWithoutPurchasesInputObjectZodSchema = makeSchema();
