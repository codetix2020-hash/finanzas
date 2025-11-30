import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseSelectObjectSchema as PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema as PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';
import { PurchaseCreateInputObjectSchema as PurchaseCreateInputObjectSchema } from './objects/PurchaseCreateInput.schema';
import { PurchaseUncheckedCreateInputObjectSchema as PurchaseUncheckedCreateInputObjectSchema } from './objects/PurchaseUncheckedCreateInput.schema';
import { PurchaseUpdateInputObjectSchema as PurchaseUpdateInputObjectSchema } from './objects/PurchaseUpdateInput.schema';
import { PurchaseUncheckedUpdateInputObjectSchema as PurchaseUncheckedUpdateInputObjectSchema } from './objects/PurchaseUncheckedUpdateInput.schema';

export const PurchaseUpsertOneSchema: z.ZodType<Prisma.PurchaseUpsertArgs> = z.object({ select: PurchaseSelectObjectSchema.optional(), include: PurchaseIncludeObjectSchema.optional(), where: PurchaseWhereUniqueInputObjectSchema, create: z.union([ PurchaseCreateInputObjectSchema, PurchaseUncheckedCreateInputObjectSchema ]), update: z.union([ PurchaseUpdateInputObjectSchema, PurchaseUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PurchaseUpsertArgs>;

export const PurchaseUpsertOneZodSchema = z.object({ select: PurchaseSelectObjectSchema.optional(), include: PurchaseIncludeObjectSchema.optional(), where: PurchaseWhereUniqueInputObjectSchema, create: z.union([ PurchaseCreateInputObjectSchema, PurchaseUncheckedCreateInputObjectSchema ]), update: z.union([ PurchaseUpdateInputObjectSchema, PurchaseUncheckedUpdateInputObjectSchema ]) }).strict();