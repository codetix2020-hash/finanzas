import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PurchaseIncludeObjectSchema as PurchaseIncludeObjectSchema } from './objects/PurchaseInclude.schema';
import { PurchaseOrderByWithRelationInputObjectSchema as PurchaseOrderByWithRelationInputObjectSchema } from './objects/PurchaseOrderByWithRelationInput.schema';
import { PurchaseWhereInputObjectSchema as PurchaseWhereInputObjectSchema } from './objects/PurchaseWhereInput.schema';
import { PurchaseWhereUniqueInputObjectSchema as PurchaseWhereUniqueInputObjectSchema } from './objects/PurchaseWhereUniqueInput.schema';
import { PurchaseScalarFieldEnumSchema } from './enums/PurchaseScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PurchaseFindManySelectSchema: z.ZodType<Prisma.PurchaseSelect> = z.object({
    id: z.boolean().optional(),
    organization: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    customerId: z.boolean().optional(),
    subscriptionId: z.boolean().optional(),
    productId: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PurchaseSelect>;

export const PurchaseFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    organization: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    customerId: z.boolean().optional(),
    subscriptionId: z.boolean().optional(),
    productId: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const PurchaseFindManySchema: z.ZodType<Prisma.PurchaseFindManyArgs> = z.object({ select: PurchaseFindManySelectSchema.optional(), include: z.lazy(() => PurchaseIncludeObjectSchema.optional()), orderBy: z.union([PurchaseOrderByWithRelationInputObjectSchema, PurchaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: PurchaseWhereInputObjectSchema.optional(), cursor: PurchaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PurchaseScalarFieldEnumSchema, PurchaseScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PurchaseFindManyArgs>;

export const PurchaseFindManyZodSchema = z.object({ select: PurchaseFindManySelectSchema.optional(), include: z.lazy(() => PurchaseIncludeObjectSchema.optional()), orderBy: z.union([PurchaseOrderByWithRelationInputObjectSchema, PurchaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: PurchaseWhereInputObjectSchema.optional(), cursor: PurchaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PurchaseScalarFieldEnumSchema, PurchaseScalarFieldEnumSchema.array()]).optional() }).strict();