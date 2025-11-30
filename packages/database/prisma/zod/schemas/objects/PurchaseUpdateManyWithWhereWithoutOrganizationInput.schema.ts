import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseScalarWhereInputObjectSchema as PurchaseScalarWhereInputObjectSchema } from './PurchaseScalarWhereInput.schema';
import { PurchaseUpdateManyMutationInputObjectSchema as PurchaseUpdateManyMutationInputObjectSchema } from './PurchaseUpdateManyMutationInput.schema';
import { PurchaseUncheckedUpdateManyWithoutOrganizationInputObjectSchema as PurchaseUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './PurchaseUncheckedUpdateManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PurchaseUpdateManyMutationInputObjectSchema), z.lazy(() => PurchaseUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const PurchaseUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.PurchaseUpdateManyWithWhereWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseUpdateManyWithWhereWithoutOrganizationInput>;
export const PurchaseUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = makeSchema();
