import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseSelectObjectSchema as PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema as PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseCreateInputObjectSchema as PurchaseCreateInputObjectSchema } from './objects/PurchaseCreateInput.schema';
import { PurchaseUncheckedCreateInputObjectSchema as PurchaseUncheckedCreateInputObjectSchema } from './objects/PurchaseUncheckedCreateInput.schema';

export const PurchaseCreateOneSchema: z.ZodType<Prisma.PurchaseCreateArgs> = z.object({ select: PurchaseSelectObjectSchema.optional(), include: PurchaseIncludeObjectSchema.optional(), data: z.union([PurchaseCreateInputObjectSchema, PurchaseUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PurchaseCreateArgs>;

export const PurchaseCreateOneZodSchema = z.object({ select: PurchaseSelectObjectSchema.optional(), include: PurchaseIncludeObjectSchema.optional(), data: z.union([PurchaseCreateInputObjectSchema, PurchaseUncheckedCreateInputObjectSchema]) }).strict();