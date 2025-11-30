import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorCreateWithoutUserInputObjectSchema as TwoFactorCreateWithoutUserInputObjectSchema } from './TwoFactorCreateWithoutUserInput.schema';
import { TwoFactorUncheckedCreateWithoutUserInputObjectSchema as TwoFactorUncheckedCreateWithoutUserInputObjectSchema } from './TwoFactorUncheckedCreateWithoutUserInput.schema';
import { TwoFactorCreateOrConnectWithoutUserInputObjectSchema as TwoFactorCreateOrConnectWithoutUserInputObjectSchema } from './TwoFactorCreateOrConnectWithoutUserInput.schema';
import { TwoFactorCreateManyUserInputEnvelopeObjectSchema as TwoFactorCreateManyUserInputEnvelopeObjectSchema } from './TwoFactorCreateManyUserInputEnvelope.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './TwoFactorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TwoFactorCreateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TwoFactorCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TwoFactorWhereUniqueInputObjectSchema), z.lazy(() => TwoFactorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUncheckedCreateNestedManyWithoutUserInput>;
export const TwoFactorUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
