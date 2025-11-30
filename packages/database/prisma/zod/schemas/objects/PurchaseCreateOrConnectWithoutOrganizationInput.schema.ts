import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseCreateWithoutOrganizationInputObjectSchema as PurchaseCreateWithoutOrganizationInputObjectSchema } from './PurchaseCreateWithoutOrganizationInput.schema';
import { PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema as PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema } from './PurchaseUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PurchaseCreateWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.PurchaseCreateOrConnectWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateOrConnectWithoutOrganizationInput>;
export const PurchaseCreateOrConnectWithoutOrganizationInputObjectZodSchema = makeSchema();
