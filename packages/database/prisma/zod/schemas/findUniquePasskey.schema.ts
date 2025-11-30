import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeySelectObjectSchema as PasskeySelectObjectSchema } from './objects/PasskeySelect.schema';
import { PasskeyIncludeObjectSchema as PasskeyIncludeObjectSchema } from './objects/PasskeyInclude.schema';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './objects/PasskeyWhereUniqueInput.schema';

export const PasskeyFindUniqueSchema: z.ZodType<Prisma.PasskeyFindUniqueArgs> = z.object({ select: PasskeySelectObjectSchema.optional(), include: PasskeyIncludeObjectSchema.optional(), where: PasskeyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PasskeyFindUniqueArgs>;

export const PasskeyFindUniqueZodSchema = z.object({ select: PasskeySelectObjectSchema.optional(), include: PasskeyIncludeObjectSchema.optional(), where: PasskeyWhereUniqueInputObjectSchema }).strict();