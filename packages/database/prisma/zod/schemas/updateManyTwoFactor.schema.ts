import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorUpdateManyMutationInputObjectSchema as TwoFactorUpdateManyMutationInputObjectSchema } from './objects/TwoFactorUpdateManyMutationInput.schema';
import { TwoFactorWhereInputObjectSchema as TwoFactorWhereInputObjectSchema } from './objects/TwoFactorWhereInput.schema';

export const TwoFactorUpdateManySchema: z.ZodType<Prisma.TwoFactorUpdateManyArgs> = z.object({ data: TwoFactorUpdateManyMutationInputObjectSchema, where: TwoFactorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TwoFactorUpdateManyArgs>;

export const TwoFactorUpdateManyZodSchema = z.object({ data: TwoFactorUpdateManyMutationInputObjectSchema, where: TwoFactorWhereInputObjectSchema.optional() }).strict();