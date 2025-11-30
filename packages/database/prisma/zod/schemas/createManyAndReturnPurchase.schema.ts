import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseSelectObjectSchema as PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseCreateManyInputObjectSchema as PurchaseCreateManyInputObjectSchema } from './objects/PurchaseCreateManyInput.schema';

export const PurchaseCreateManyAndReturnSchema: z.ZodType<Prisma.PurchaseCreateManyAndReturnArgs> = z.object({ select: PurchaseSelectObjectSchema.optional(), data: z.union([ PurchaseCreateManyInputObjectSchema, z.array(PurchaseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PurchaseCreateManyAndReturnArgs>;

export const PurchaseCreateManyAndReturnZodSchema = z.object({ select: PurchaseSelectObjectSchema.optional(), data: z.union([ PurchaseCreateManyInputObjectSchema, z.array(PurchaseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();