import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeySelectObjectSchema as PasskeySelectObjectSchema } from './objects/PasskeySelect.schema';
import { PasskeyUpdateManyMutationInputObjectSchema as PasskeyUpdateManyMutationInputObjectSchema } from './objects/PasskeyUpdateManyMutationInput.schema';
import { PasskeyWhereInputObjectSchema as PasskeyWhereInputObjectSchema } from './objects/PasskeyWhereInput.schema';

export const PasskeyUpdateManyAndReturnSchema: z.ZodType<Prisma.PasskeyUpdateManyAndReturnArgs> = z.object({ select: PasskeySelectObjectSchema.optional(), data: PasskeyUpdateManyMutationInputObjectSchema, where: PasskeyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PasskeyUpdateManyAndReturnArgs>;

export const PasskeyUpdateManyAndReturnZodSchema = z.object({ select: PasskeySelectObjectSchema.optional(), data: PasskeyUpdateManyMutationInputObjectSchema, where: PasskeyWhereInputObjectSchema.optional() }).strict();