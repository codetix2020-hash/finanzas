import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeySelectObjectSchema as PasskeySelectObjectSchema } from './objects/PasskeySelect.schema';
import { PasskeyCreateManyInputObjectSchema as PasskeyCreateManyInputObjectSchema } from './objects/PasskeyCreateManyInput.schema';

export const PasskeyCreateManyAndReturnSchema: z.ZodType<Prisma.PasskeyCreateManyAndReturnArgs> = z.object({ select: PasskeySelectObjectSchema.optional(), data: z.union([ PasskeyCreateManyInputObjectSchema, z.array(PasskeyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PasskeyCreateManyAndReturnArgs>;

export const PasskeyCreateManyAndReturnZodSchema = z.object({ select: PasskeySelectObjectSchema.optional(), data: z.union([ PasskeyCreateManyInputObjectSchema, z.array(PasskeyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();