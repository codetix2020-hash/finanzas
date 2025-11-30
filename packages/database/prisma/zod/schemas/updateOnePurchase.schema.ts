import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseSelectObjectSchema as PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema as PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseUpdateInputObjectSchema as PurchaseUpdateInputObjectSchema } from './objects/PurchaseUpdateInput.schema';
import { PurchaseUncheckedUpdateInputObjectSchema as PurchaseUncheckedUpdateInputObjectSchema } from './objects/PurchaseUncheckedUpdateInput.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';

export const PurchaseUpdateOneSchema: z.ZodType<Prisma.PurchaseUpdateArgs> = z.object({ select: PurchaseSelectObjectSchema.optional(), include: PurchaseIncludeObjectSchema.optional(), data: z.union([PurchaseUpdateInputObjectSchema, PurchaseUncheckedUpdateInputObjectSchema]), where: PurchaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PurchaseUpdateArgs>;

export const PurchaseUpdateOneZodSchema = z.object({ select: PurchaseSelectObjectSchema.optional(), include: PurchaseIncludeObjectSchema.optional(), data: z.union([PurchaseUpdateInputObjectSchema, PurchaseUncheckedUpdateInputObjectSchema]), where: PurchaseWhereUniqueInputObjectSchema }).strict();