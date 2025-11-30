import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseUpdateManyMutationInputObjectSchema as PurchaseUpdateManyMutationInputObjectSchema } from './objects/PurchaseUpdateManyMutationInput.schema';
import { PurchaseWhereInputObjectSchema as PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';

export const PurchaseUpdateManySchema: z.ZodType<Prisma.PurchaseUpdateManyArgs> = z.object({ data: PurchaseUpdateManyMutationInputObjectSchema, where: PurchaseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PurchaseUpdateManyArgs>;

export const PurchaseUpdateManyZodSchema = z.object({ data: PurchaseUpdateManyMutationInputObjectSchema, where: PurchaseWhereInputObjectSchema.optional() }).strict();