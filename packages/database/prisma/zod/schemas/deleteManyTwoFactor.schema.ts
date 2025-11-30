import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorWhereInputObjectSchema as TwoFactorWhereInputObjectSchema } from './objects/TwoFactorWhereInput.schema';

export const TwoFactorDeleteManySchema: z.ZodType<Prisma.TwoFactorDeleteManyArgs> = z.object({ where: TwoFactorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TwoFactorDeleteManyArgs>;

export const TwoFactorDeleteManyZodSchema = z.object({ where: TwoFactorWhereInputObjectSchema.optional() }).strict();