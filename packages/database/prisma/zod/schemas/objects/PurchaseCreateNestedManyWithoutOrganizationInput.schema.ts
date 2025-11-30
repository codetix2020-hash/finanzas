import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseCreateWithoutOrganizationInputObjectSchema as PurchaseCreateWithoutOrganizationInputObjectSchema } from './PurchaseCreateWithoutOrganizationInput.schema';
import { PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema as PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema } from './PurchaseUncheckedCreateWithoutOrganizationInput.schema';
import { PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema as PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema } from './PurchaseCreateOrConnectWithoutOrganizationInput.schema';
import { PurchaseCreateManyOrganizationInputEnvelopeObjectSchema as PurchaseCreateManyOrganizationInputEnvelopeObjectSchema } from './PurchaseCreateManyOrganizationInputEnvelope.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PurchaseCreateWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => PurchaseCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PurchaseCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PurchaseCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.PurchaseCreateNestedManyWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateNestedManyWithoutOrganizationInput>;
export const PurchaseCreateNestedManyWithoutOrganizationInputObjectZodSchema = makeSchema();
