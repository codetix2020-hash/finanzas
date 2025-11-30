import type { Prisma } from '../../generated/client';
import * as z from 'zod';
import { CostTrackingSelectObjectSchema as CostTrackingSelectObjectSchema } from './objects/CostTrackingSelect.schema';
import { CostTrackingUpdateManyMutationInputObjectSchema as CostTrackingUpdateManyMutationInputObjectSchema } from './objects/CostTrackingUpdateManyMutationInput.schema';
import { CostTrackingWhereInputObjectSchema as CostTrackingWhereInputObjectSchema } from './objects/CostTrackingWhereInput.schema';

export const CostTrackingUpdateManyAndReturnSchema: z.ZodType<Prisma.CostTrackingUpdateManyAndReturnArgs> = z.object({ select: CostTrackingSelectObjectSchema.optional(), data: CostTrackingUpdateManyMutationInputObjectSchema, where: CostTrackingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CostTrackingUpdateManyAndReturnArgs>;

export const CostTrackingUpdateManyAndReturnZodSchema = z.object({ select: CostTrackingSelectObjectSchema.optional(), data: CostTrackingUpdateManyMutationInputObjectSchema, where: CostTrackingWhereInputObjectSchema.optional() }).strict();