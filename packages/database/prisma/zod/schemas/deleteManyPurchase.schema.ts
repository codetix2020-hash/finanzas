import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseWhereInputObjectSchema as PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';

export const PurchaseDeleteManySchema: z.ZodType<Prisma.PurchaseDeleteManyArgs> = z.object({ where: PurchaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PurchaseDeleteManyArgs>;

export const PurchaseDeleteManyZodSchema = z.object({ where: PurchaseWhereInputObjectSchema.optional() }).strict();