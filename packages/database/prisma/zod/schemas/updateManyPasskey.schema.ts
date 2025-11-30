import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeyUpdateManyMutationInputObjectSchema as PasskeyUpdateManyMutationInputObjectSchema } from './objects/PasskeyUpdateManyMutationInput.schema';
import { PasskeyWhereInputObjectSchema as PasskeyWhereInputObjectSchema } from './objects/PasskeyWhereInput.schema';

export const PasskeyUpdateManySchema: z.ZodType<Prisma.PasskeyUpdateManyArgs> = z.object({ data: PasskeyUpdateManyMutationInputObjectSchema, where: PasskeyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PasskeyUpdateManyArgs>;

export const PasskeyUpdateManyZodSchema = z.object({ data: PasskeyUpdateManyMutationInputObjectSchema, where: PasskeyWhereInputObjectSchema.optional() }).strict();