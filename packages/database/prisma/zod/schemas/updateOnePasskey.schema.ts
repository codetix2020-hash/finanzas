import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeySelectObjectSchema as PasskeySelectObjectSchema } from './objects/PasskeySelect.schema';
import { PasskeyIncludeObjectSchema as PasskeyIncludeObjectSchema } from './objects/PasskeyInclude.schema';
import { PasskeyUpdateInputObjectSchema as PasskeyUpdateInputObjectSchema } from './objects/PasskeyUpdateInput.schema';
import { PasskeyUncheckedUpdateInputObjectSchema as PasskeyUncheckedUpdateInputObjectSchema } from './objects/PasskeyUncheckedUpdateInput.schema';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './objects/PasskeyWhereUniqueInput.schema';

export const PasskeyUpdateOneSchema: z.ZodType<Prisma.PasskeyUpdateArgs> = z.object({ select: PasskeySelectObjectSchema.optional(), include: PasskeyIncludeObjectSchema.optional(), data: z.union([PasskeyUpdateInputObjectSchema, PasskeyUncheckedUpdateInputObjectSchema]), where: PasskeyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PasskeyUpdateArgs>;

export const PasskeyUpdateOneZodSchema = z.object({ select: PasskeySelectObjectSchema.optional(), include: PasskeyIncludeObjectSchema.optional(), data: z.union([PasskeyUpdateInputObjectSchema, PasskeyUncheckedUpdateInputObjectSchema]), where: PasskeyWhereUniqueInputObjectSchema }).strict();