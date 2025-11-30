import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingWhereInputObjectSchema as CostTrackingWhereInputObjectSchema } from './CostTrackingWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CostTrackingWhereInputObjectSchema).optional(),
  some: z.lazy(() => CostTrackingWhereInputObjectSchema).optional(),
  none: z.lazy(() => CostTrackingWhereInputObjectSchema).optional()
}).strict();
export const CostTrackingListRelationFilterObjectSchema: z.ZodType<Prisma.CostTrackingListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingListRelationFilter>;
export const CostTrackingListRelationFilterObjectZodSchema = makeSchema();
