import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { PasskeyIncludeObjectSchema as PasskeyIncludeObjectSchema } from './objects/PasskeyInclude.schema';
import { PasskeyOrderByWithRelationInputObjectSchema as PasskeyOrderByWithRelationInputObjectSchema } from './objects/PasskeyOrderByWithRelationInput.schema';
import { PasskeyWhereInputObjectSchema as PasskeyWhereInputObjectSchema } from './objects/PasskeyWhereInput.schema';
import { PasskeyWhereUniqueInputObjectSchema as PasskeyWhereUniqueInputObjectSchema } from './objects/PasskeyWhereUniqueInput.schema';
import { PasskeyScalarFieldEnumSchema } from './enums/PasskeyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PasskeyFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PasskeySelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    publicKey: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    credentialID: z.boolean().optional(),
    counter: z.boolean().optional(),
    deviceType: z.boolean().optional(),
    backedUp: z.boolean().optional(),
    transports: z.boolean().optional(),
    aaguid: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PasskeySelect>;

export const PasskeyFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    publicKey: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    credentialID: z.boolean().optional(),
    counter: z.boolean().optional(),
    deviceType: z.boolean().optional(),
    backedUp: z.boolean().optional(),
    transports: z.boolean().optional(),
    aaguid: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const PasskeyFindFirstOrThrowSchema: z.ZodType<Prisma.PasskeyFindFirstOrThrowArgs> = z.object({ select: PasskeyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PasskeyIncludeObjectSchema.optional()), orderBy: z.union([PasskeyOrderByWithRelationInputObjectSchema, PasskeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PasskeyWhereInputObjectSchema.optional(), cursor: PasskeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PasskeyScalarFieldEnumSchema, PasskeyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PasskeyFindFirstOrThrowArgs>;

export const PasskeyFindFirstOrThrowZodSchema = z.object({ select: PasskeyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PasskeyIncludeObjectSchema.optional()), orderBy: z.union([PasskeyOrderByWithRelationInputObjectSchema, PasskeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: PasskeyWhereInputObjectSchema.optional(), cursor: PasskeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PasskeyScalarFieldEnumSchema, PasskeyScalarFieldEnumSchema.array()]).optional() }).strict();