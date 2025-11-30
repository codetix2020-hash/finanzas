import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutOrganizationInputObjectSchema as PurchaseUpdateWithoutOrganizationInputObjectSchema } from './PurchaseUpdateWithoutOrganizationInput.schema';
import { PurchaseUncheckedUpdateWithoutOrganizationInputObjectSchema as PurchaseUncheckedUpdateWithoutOrganizationInputObjectSchema } from './PurchaseUncheckedUpdateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PurchaseUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const PurchaseUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.PurchaseUpdateWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUpdateWithWhereUniqueWithoutOrganizationInput>;
export const PurchaseUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
