import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutPurchasesInputObjectSchema as OrganizationUpdateWithoutPurchasesInputObjectSchema } from './OrganizationUpdateWithoutPurchasesInput.schema';
import { OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema as OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema } from './OrganizationUncheckedUpdateWithoutPurchasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutPurchasesInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutPurchasesInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutPurchasesInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutPurchasesInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutPurchasesInput>;
export const OrganizationUpdateToOneWithWhereWithoutPurchasesInputObjectZodSchema = makeSchema();
