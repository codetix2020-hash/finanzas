import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { AiChatIncludeObjectSchema as AiChatIncludeObjectSchema } from './objects/AiChatInclude.schema';
import { AiChatOrderByWithRelationInputObjectSchema as AiChatOrderByWithRelationInputObjectSchema } from './objects/AiChatOrderByWithRelationInput.schema';
import { AiChatWhereInputObjectSchema as AiChatWhereInputObjectSchema } from './objects/AiChatWhereInput.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './objects/AiChatWhereUniqueInput.schema';
import { AiChatScalarFieldEnumSchema } from './enums/AiChatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AiChatFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AiChatSelect> = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    title: z.boolean().optional(),
    messages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AiChatSelect>;

export const AiChatFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    organizationId: z.boolean().optional(),
    organization: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    title: z.boolean().optional(),
    messages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const AiChatFindFirstOrThrowSchema: z.ZodType<Prisma.AiChatFindFirstOrThrowArgs> = z.object({ select: AiChatFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AiChatIncludeObjectSchema.optional()), orderBy: z.union([AiChatOrderByWithRelationInputObjectSchema, AiChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiChatWhereInputObjectSchema.optional(), cursor: AiChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiChatScalarFieldEnumSchema, AiChatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AiChatFindFirstOrThrowArgs>;

export const AiChatFindFirstOrThrowZodSchema = z.object({ select: AiChatFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AiChatIncludeObjectSchema.optional()), orderBy: z.union([AiChatOrderByWithRelationInputObjectSchema, AiChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiChatWhereInputObjectSchema.optional(), cursor: AiChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiChatScalarFieldEnumSchema, AiChatScalarFieldEnumSchema.array()]).optional() }).strict();