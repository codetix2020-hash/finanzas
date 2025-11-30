import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseCreateWithoutUserInputObjectSchema as PurchaseCreateWithoutUserInputObjectSchema } from './PurchaseCreateWithoutUserInput.schema';
import { PurchaseUncheckedCreateWithoutUserInputObjectSchema as PurchaseUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateWithoutUserInput.schema';
import { PurchaseCreateOrConnectWithoutUserInputObjectSchema as PurchaseCreateOrConnectWithoutUserInputObjectSchema } from './PurchaseCreateOrConnectWithoutUserInput.schema';
import { PurchaseCreateManyUserInputEnvelopeObjectSchema as PurchaseCreateManyUserInputEnvelopeObjectSchema } from './PurchaseCreateManyUserInputEnvelope.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema), z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PurchaseCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PurchaseCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PurchaseCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PurchaseWhereUniqueInputObjectSchema), z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PurchaseCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PurchaseCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseCreateNestedManyWithoutUserInput>;
export const PurchaseCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
