import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SaasMetricsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SaasMetricsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SaasMetricsOrderByRelationAggregateInput>;
export const SaasMetricsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
