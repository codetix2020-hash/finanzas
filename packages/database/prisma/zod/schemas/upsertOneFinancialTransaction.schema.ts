import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { FinancialTransactionSelectObjectSchema as FinancialTransactionSelectObjectSchema } from './objects/FinancialTransactionSelect.schema';
import { FinancialTransactionIncludeObjectSchema as FinancialTransactionIncludeObjectSchema } from './objects/FinancialTransactionInclude.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema as FinancialTransactionWhereUniqueInputObjectSchema } from './objects/FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateInputObjectSchema as FinancialTransactionCreateInputObjectSchema } from './objects/FinancialTransactionCreateInput.schema';
import { FinancialTransactionUncheckedCreateInputObjectSchema as FinancialTransactionUncheckedCreateInputObjectSchema } from './objects/FinancialTransactionUncheckedCreateInput.schema';
import { FinancialTransactionUpdateInputObjectSchema as FinancialTransactionUpdateInputObjectSchema } from './objects/FinancialTransactionUpdateInput.schema';
import { FinancialTransactionUncheckedUpdateInputObjectSchema as FinancialTransactionUncheckedUpdateInputObjectSchema } from './objects/FinancialTransactionUncheckedUpdateInput.schema';

export const FinancialTransactionUpsertOneSchema: z.ZodType<Prisma.FinancialTransactionUpsertArgs> = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), where: FinancialTransactionWhereUniqueInputObjectSchema, create: z.union([ FinancialTransactionCreateInputObjectSchema, FinancialTransactionUncheckedCreateInputObjectSchema ]), update: z.union([ FinancialTransactionUpdateInputObjectSchema, FinancialTransactionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FinancialTransactionUpsertArgs>;

export const FinancialTransactionUpsertOneZodSchema = z.object({ select: FinancialTransactionSelectObjectSchema.optional(), include: FinancialTransactionIncludeObjectSchema.optional(), where: FinancialTransactionWhereUniqueInputObjectSchema, create: z.union([ FinancialTransactionCreateInputObjectSchema, FinancialTransactionUncheckedCreateInputObjectSchema ]), update: z.union([ FinancialTransactionUpdateInputObjectSchema, FinancialTransactionUncheckedUpdateInputObjectSchema ]) }).strict();