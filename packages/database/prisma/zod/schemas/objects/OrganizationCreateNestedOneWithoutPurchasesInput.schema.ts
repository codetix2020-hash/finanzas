import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutPurchasesInputObjectSchema as OrganizationCreateWithoutPurchasesInputObjectSchema } from './OrganizationCreateWithoutPurchasesInput.schema';
import { OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema as OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema } from './OrganizationUncheckedCreateWithoutPurchasesInput.schema';
import { OrganizationCreateOrConnectWithoutPurchasesInputObjectSchema as OrganizationCreateOrConnectWithoutPurchasesInputObjectSchema } from './OrganizationCreateOrConnectWithoutPurchasesInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutPurchasesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutPurchasesInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutPurchasesInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutPurchasesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutPurchasesInput>;
export const OrganizationCreateNestedOneWithoutPurchasesInputObjectZodSchema = makeSchema();
