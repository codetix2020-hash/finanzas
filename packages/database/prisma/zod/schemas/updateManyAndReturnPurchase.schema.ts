import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseSelectObjectSchema as PurchaseSelectObjectSchema } from './objects/PurchaseSelect.schema';
import { PurchaseUpdateManyMutationInputObjectSchema as PurchaseUpdateManyMutationInputObjectSchema } from './objects/PurchaseUpdateManyMutationInput.schema';
import { PurchaseWhereInputObjectSchema as PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';

export const PurchaseUpdateManyAndReturnSchema: z.ZodType<Prisma.PurchaseUpdateManyAndReturnArgs> = z.object({ select: PurchaseSelectObjectSchema.optional(), data: PurchaseUpdateManyMutationInputObjectSchema, where: PurchaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PurchaseUpdateManyAndReturnArgs>;

export const PurchaseUpdateManyAndReturnZodSchema = z.object({ select: PurchaseSelectObjectSchema.optional(), data: PurchaseUpdateManyMutationInputObjectSchema, where: PurchaseWhereInputObjectSchema.optional() }).strict();