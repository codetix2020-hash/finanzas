import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AiChatOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AiChatOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatOrderByRelationAggregateInput>;
export const AiChatOrderByRelationAggregateInputObjectZodSchema = makeSchema();
