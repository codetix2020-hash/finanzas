import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorSelectObjectSchema as TwoFactorSelectObjectSchema } from './objects/TwoFactorSelect.schema';
import { TwoFactorIncludeObjectSchema as TwoFactorIncludeObjectSchema } from './objects/TwoFactorInclude.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './objects/TwoFactorWhereUniqueInput.schema';

export const TwoFactorFindUniqueSchema: z.ZodType<Prisma.TwoFactorFindUniqueArgs> = z.object({ select: TwoFactorSelectObjectSchema.optional(), include: TwoFactorIncludeObjectSchema.optional(), where: TwoFactorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TwoFactorFindUniqueArgs>;

export const TwoFactorFindUniqueZodSchema = z.object({ select: TwoFactorSelectObjectSchema.optional(), include: TwoFactorIncludeObjectSchema.optional(), where: TwoFactorWhereUniqueInputObjectSchema }).strict();