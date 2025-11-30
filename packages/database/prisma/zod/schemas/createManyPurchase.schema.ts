import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseCreateManyInputObjectSchema as PurchaseCreateManyInputObjectSchema } from './objects/PurchaseCreateManyInput.schema';

export const PurchaseCreateManySchema: z.ZodType<Prisma.PurchaseCreateManyArgs> = z.object({ data: z.union([ PurchaseCreateManyInputObjectSchema, z.array(PurchaseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PurchaseCreateManyArgs>;

export const PurchaseCreateManyZodSchema = z.object({ data: z.union([ PurchaseCreateManyInputObjectSchema, z.array(PurchaseCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();