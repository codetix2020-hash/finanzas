import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeySelectObjectSchema as PasskeySelectObjectSchema } from './objects/PasskeySelect.schema';
import { PasskeyIncludeObjectSchema as PasskeyIncludeObjectSchema } from './objects/PasskeyInclude.schema';
import { PasskeyCreateInputObjectSchema as PasskeyCreateInputObjectSchema } from './objects/PasskeyCreateInput.schema';
import { PasskeyUncheckedCreateInputObjectSchema as PasskeyUncheckedCreateInputObjectSchema } from './objects/PasskeyUncheckedCreateInput.schema';

export const PasskeyCreateOneSchema: z.ZodType<Prisma.PasskeyCreateArgs> = z.object({ select: PasskeySelectObjectSchema.optional(), include: PasskeyIncludeObjectSchema.optional(), data: z.union([PasskeyCreateInputObjectSchema, PasskeyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PasskeyCreateArgs>;

export const PasskeyCreateOneZodSchema = z.object({ select: PasskeySelectObjectSchema.optional(), include: PasskeyIncludeObjectSchema.optional(), data: z.union([PasskeyCreateInputObjectSchema, PasskeyUncheckedCreateInputObjectSchema]) }).strict();