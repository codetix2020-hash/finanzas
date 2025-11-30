import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseSelectObjectSchema as PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema as PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';

export const PurchaseFindUniqueSchema: z.ZodType<Prisma.PurchaseFindUniqueArgs> = z.object({ select: PurchaseSelectObjectSchema.optional(), include: PurchaseIncludeObjectSchema.optional(), where: PurchaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PurchaseFindUniqueArgs>;

export const PurchaseFindUniqueZodSchema = z.object({ select: PurchaseSelectObjectSchema.optional(), include: PurchaseIncludeObjectSchema.optional(), where: PurchaseWhereUniqueInputObjectSchema }).strict();