import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeySelectObjectSchema as PasskeySelectObjectSchema } from './objects/PasskeySelect.schema';
import { PasskeyIncludeObjectSchema as PasskeyIncludeObjectSchema } from './objects/PasskeyInclude.schema';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './objects/PasskeyWhereUniqueInput.schema';
import { PasskeyCreateInputObjectSchema as PasskeyCreateInputObjectSchema } from './objects/PasskeyCreateInput.schema';
import { PasskeyUncheckedCreateInputObjectSchema as PasskeyUncheckedCreateInputObjectSchema } from './objects/PasskeyUncheckedCreateInput.schema';
import { PasskeyUpdateInputObjectSchema as PasskeyUpdateInputObjectSchema } from './objects/PasskeyUpdateInput.schema';
import { PasskeyUncheckedUpdateInputObjectSchema as PasskeyUncheckedUpdateInputObjectSchema } from './objects/PasskeyUncheckedUpdateInput.schema';

export const PasskeyUpsertOneSchema: z.ZodType<Prisma.PasskeyUpsertArgs> = z.object({ select: PasskeySelectObjectSchema.optional(), include: PasskeyIncludeObjectSchema.optional(), where: PasskeyWhereUniqueInputObjectSchema, create: z.union([ PasskeyCreateInputObjectSchema, PasskeyUncheckedCreateInputObjectSchema ]), update: z.union([ PasskeyUpdateInputObjectSchema, PasskeyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PasskeyUpsertArgs>;

export const PasskeyUpsertOneZodSchema = z.object({ select: PasskeySelectObjectSchema.optional(), include: PasskeyIncludeObjectSchema.optional(), where: PasskeyWhereUniqueInputObjectSchema, create: z.union([ PasskeyCreateInputObjectSchema, PasskeyUncheckedCreateInputObjectSchema ]), update: z.union([ PasskeyUpdateInputObjectSchema, PasskeyUncheckedUpdateInputObjectSchema ]) }).strict();