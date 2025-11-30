import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingUpdateManyMutationInputObjectSchema as CostTrackingUpdateManyMutationInputObjectSchema } from './objects/CostTrackingUpdateManyMutationInput.schema';
import { CostTrackingWhereInputObjectSchema as CostTrackingWhereInputObjectSchema } from './objects/CostTrackingWhereInput.schema';

export const CostTrackingUpdateManySchema: z.ZodType<Prisma.CostTrackingUpdateManyArgs> = z.object({ data: CostTrackingUpdateManyMutationInputObjectSchema, where: CostTrackingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CostTrackingUpdateManyArgs>;

export const CostTrackingUpdateManyZodSchema = z.object({ data: CostTrackingUpdateManyMutationInputObjectSchema, where: CostTrackingWhereInputObjectSchema.optional() }).strict();