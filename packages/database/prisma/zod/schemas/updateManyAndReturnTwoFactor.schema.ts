import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorSelectObjectSchema as TwoFactorSelectObjectSchema } from './objects/TwoFactorSelect.schema';
import { TwoFactorUpdateManyMutationInputObjectSchema as TwoFactorUpdateManyMutationInputObjectSchema } from './objects/TwoFactorUpdateManyMutationInput.schema';
import { TwoFactorWhereInputObjectSchema as TwoFactorWhereInputObjectSchema } from './objects/TwoFactorWhereInput.schema';

export const TwoFactorUpdateManyAndReturnSchema: z.ZodType<Prisma.TwoFactorUpdateManyAndReturnArgs> = z.object({ select: TwoFactorSelectObjectSchema.optional(), data: TwoFactorUpdateManyMutationInputObjectSchema, where: TwoFactorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TwoFactorUpdateManyAndReturnArgs>;

export const TwoFactorUpdateManyAndReturnZodSchema = z.object({ select: TwoFactorSelectObjectSchema.optional(), data: TwoFactorUpdateManyMutationInputObjectSchema, where: TwoFactorWhereInputObjectSchema.optional() }).strict();