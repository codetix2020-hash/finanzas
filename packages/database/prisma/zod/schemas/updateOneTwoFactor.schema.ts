import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorSelectObjectSchema as TwoFactorSelectObjectSchema } from './objects/TwoFactorSelect.schema';
import { TwoFactorIncludeObjectSchema as TwoFactorIncludeObjectSchema } from './objects/TwoFactorInclude.schema';
import { TwoFactorUpdateInputObjectSchema as TwoFactorUpdateInputObjectSchema } from './objects/TwoFactorUpdateInput.schema';
import { TwoFactorUncheckedUpdateInputObjectSchema as TwoFactorUncheckedUpdateInputObjectSchema } from './objects/TwoFactorUncheckedUpdateInput.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './objects/TwoFactorWhereUniqueInput.schema';

export const TwoFactorUpdateOneSchema: z.ZodType<Prisma.TwoFactorUpdateArgs> = z.object({ select: TwoFactorSelectObjectSchema.optional(), include: TwoFactorIncludeObjectSchema.optional(), data: z.union([TwoFactorUpdateInputObjectSchema, TwoFactorUncheckedUpdateInputObjectSchema]), where: TwoFactorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TwoFactorUpdateArgs>;

export const TwoFactorUpdateOneZodSchema = z.object({ select: TwoFactorSelectObjectSchema.optional(), include: TwoFactorIncludeObjectSchema.optional(), data: z.union([TwoFactorUpdateInputObjectSchema, TwoFactorUncheckedUpdateInputObjectSchema]), where: TwoFactorWhereUniqueInputObjectSchema }).strict();