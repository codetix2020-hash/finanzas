import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorSelectObjectSchema as TwoFactorSelectObjectSchema } from './objects/TwoFactorSelect.schema';
import { TwoFactorIncludeObjectSchema as TwoFactorIncludeObjectSchema } from './objects/TwoFactorInclude.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './objects/TwoFactorWhereUniqueInput.schema';
import { TwoFactorCreateInputObjectSchema as TwoFactorCreateInputObjectSchema } from './objects/TwoFactorCreateInput.schema';
import { TwoFactorUncheckedCreateInputObjectSchema as TwoFactorUncheckedCreateInputObjectSchema } from './objects/TwoFactorUncheckedCreateInput.schema';
import { TwoFactorUpdateInputObjectSchema as TwoFactorUpdateInputObjectSchema } from './objects/TwoFactorUpdateInput.schema';
import { TwoFactorUncheckedUpdateInputObjectSchema as TwoFactorUncheckedUpdateInputObjectSchema } from './objects/TwoFactorUncheckedUpdateInput.schema';

export const TwoFactorUpsertOneSchema: z.ZodType<Prisma.TwoFactorUpsertArgs> = z.object({ select: TwoFactorSelectObjectSchema.optional(), include: TwoFactorIncludeObjectSchema.optional(), where: TwoFactorWhereUniqueInputObjectSchema, create: z.union([ TwoFactorCreateInputObjectSchema, TwoFactorUncheckedCreateInputObjectSchema ]), update: z.union([ TwoFactorUpdateInputObjectSchema, TwoFactorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TwoFactorUpsertArgs>;

export const TwoFactorUpsertOneZodSchema = z.object({ select: TwoFactorSelectObjectSchema.optional(), include: TwoFactorIncludeObjectSchema.optional(), where: TwoFactorWhereUniqueInputObjectSchema, create: z.union([ TwoFactorCreateInputObjectSchema, TwoFactorUncheckedCreateInputObjectSchema ]), update: z.union([ TwoFactorUpdateInputObjectSchema, TwoFactorUncheckedUpdateInputObjectSchema ]) }).strict();