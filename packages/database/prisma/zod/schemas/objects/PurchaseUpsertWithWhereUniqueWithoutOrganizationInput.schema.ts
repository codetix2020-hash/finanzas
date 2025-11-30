import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutOrganizationInputObjectSchema as PurchaseUpdateWithoutOrganizationInputObjectSchema } from './PurchaseUpdateWithoutOrganizationInput.schema';
import { PurchaseUncheckedUpdateWithoutOrganizationInputObjectSchema as PurchaseUncheckedUpdateWithoutOrganizationInputObjectSchema } from './PurchaseUncheckedUpdateWithoutOrganizationInput.schema';
import { PurchaseCreateWithoutOrganizationInputObjectSchema as PurchaseCreateWithoutOrganizationInputObjectSchema } from './PurchaseCreateWithoutOrganizationInput.schema';
import { PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema as PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema } from './PurchaseUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PurchaseUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => PurchaseCreateWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const PurchaseUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.PurchaseUpsertWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUpsertWithWhereUniqueWithoutOrganizationInput>;
export const PurchaseUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
