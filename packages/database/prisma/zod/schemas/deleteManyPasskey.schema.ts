import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeyWhereInputObjectSchema as PasskeyWhereInputObjectSchema } from './objects/PasskeyWhereInput.schema';

export const PasskeyDeleteManySchema: z.ZodType<Prisma.PasskeyDeleteManyArgs> = z.object({ where: PasskeyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PasskeyDeleteManyArgs>;

export const PasskeyDeleteManyZodSchema = z.object({ where: PasskeyWhereInputObjectSchema.optional() }).strict();