import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeyCreateManyInputObjectSchema as PasskeyCreateManyInputObjectSchema } from './objects/PasskeyCreateManyInput.schema';

export const PasskeyCreateManySchema: z.ZodType<Prisma.PasskeyCreateManyArgs> = z.object({ data: z.union([ PasskeyCreateManyInputObjectSchema, z.array(PasskeyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PasskeyCreateManyArgs>;

export const PasskeyCreateManyZodSchema = z.object({ data: z.union([ PasskeyCreateManyInputObjectSchema, z.array(PasskeyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();