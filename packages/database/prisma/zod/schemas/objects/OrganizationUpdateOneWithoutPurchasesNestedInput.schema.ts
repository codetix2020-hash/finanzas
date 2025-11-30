import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutPurchasesInputObjectSchema as OrganizationCreateWithoutPurchasesInputObjectSchema } from './OrganizationCreateWithoutPurchasesInput.schema';
import { OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema as OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema } from './OrganizationUncheckedCreateWithoutPurchasesInput.schema';
import { OrganizationCreateOrConnectWithoutPurchasesInputObjectSchema as OrganizationCreateOrConnectWithoutPurchasesInputObjectSchema } from './OrganizationCreateOrConnectWithoutPurchasesInput.schema';
import { OrganizationUpsertWithoutPurchasesInputObjectSchema as OrganizationUpsertWithoutPurchasesInputObjectSchema } from './OrganizationUpsertWithoutPurchasesInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutPurchasesInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutPurchasesInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutPurchasesInput.schema';
import { OrganizationUpdateWithoutPurchasesInputObjectSchema as OrganizationUpdateWithoutPurchasesInputObjectSchema } from './OrganizationUpdateWithoutPurchasesInput.schema';
import { OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema as OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutPurchasesInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutPurchasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutPurchasesInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutPurchasesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutPurchasesInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutPurchasesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutPurchasesNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutPurchasesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutPurchasesNestedInput>;
export const OrganizationUpdateOneWithoutPurchasesNestedInputObjectZodSchema = makeSchema();
