import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorSelectObjectSchema as TwoFactorSelectObjectSchema } from './objects/TwoFactorSelect.schema';
import { TwoFactorIncludeObjectSchema as TwoFactorIncludeObjectSchema } from './objects/TwoFactorInclude.schema';
import { TwoFactorCreateInputObjectSchema as TwoFactorCreateInputObjectSchema } from './objects/TwoFactorCreateInput.schema';
import { TwoFactorUncheckedCreateInputObjectSchema as TwoFactorUncheckedCreateInputObjectSchema } from './objects/TwoFactorUncheckedCreateInput.schema';

export const TwoFactorCreateOneSchema: z.ZodType<Prisma.TwoFactorCreateArgs> = z.object({ select: TwoFactorSelectObjectSchema.optional(), include: TwoFactorIncludeObjectSchema.optional(), data: z.union([TwoFactorCreateInputObjectSchema, TwoFactorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TwoFactorCreateArgs>;

export const TwoFactorCreateOneZodSchema = z.object({ select: TwoFactorSelectObjectSchema.optional(), include: TwoFactorIncludeObjectSchema.optional(), data: z.union([TwoFactorCreateInputObjectSchema, TwoFactorUncheckedCreateInputObjectSchema]) }).strict();