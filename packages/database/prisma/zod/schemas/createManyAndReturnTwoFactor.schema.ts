import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { TwoFactorSelectObjectSchema as TwoFactorSelectObjectSchema } from './objects/TwoFactorSelect.schema';
import { TwoFactorCreateManyInputObjectSchema as TwoFactorCreateManyInputObjectSchema } from './objects/TwoFactorCreateManyInput.schema';

export const TwoFactorCreateManyAndReturnSchema: z.ZodType<Prisma.TwoFactorCreateManyAndReturnArgs> = z.object({ select: TwoFactorSelectObjectSchema.optional(), data: z.union([ TwoFactorCreateManyInputObjectSchema, z.array(TwoFactorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TwoFactorCreateManyAndReturnArgs>;

export const TwoFactorCreateManyAndReturnZodSchema = z.object({ select: TwoFactorSelectObjectSchema.optional(), data: z.union([ TwoFactorCreateManyInputObjectSchema, z.array(TwoFactorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();