import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './TwoFactorWhereUniqueInput.schema';
import { TwoFactorCreateWithoutUserInputObjectSchema as TwoFactorCreateWithoutUserInputObjectSchema } from './TwoFactorCreateWithoutUserInput.schema';
import { TwoFactorUncheckedCreateWithoutUserInputObjectSchema as TwoFactorUncheckedCreateWithoutUserInputObjectSchema } from './TwoFactorUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TwoFactorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TwoFactorCreateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TwoFactorCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCreateOrConnectWithoutUserInput>;
export const TwoFactorCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
