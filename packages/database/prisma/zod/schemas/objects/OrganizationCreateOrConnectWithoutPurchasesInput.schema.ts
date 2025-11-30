import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutPurchasesInputObjectSchema as OrganizationCreateWithoutPurchasesInputObjectSchema } from './OrganizationCreateWithoutPurchasesInput.schema';
import { OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema as OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema } from './OrganizationUncheckedCreateWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutPurchasesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutPurchasesInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutPurchasesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutPurchasesInput>;
export const OrganizationCreateOrConnectWithoutPurchasesInputObjectZodSchema = makeSchema();
