import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AiChatCountOrderByAggregateInputObjectSchema as AiChatCountOrderByAggregateInputObjectSchema } from './AiChatCountOrderByAggregateInput.schema';
import { AiChatMaxOrderByAggregateInputObjectSchema as AiChatMaxOrderByAggregateInputObjectSchema } from './AiChatMaxOrderByAggregateInput.schema';
import { AiChatMinOrderByAggregateInputObjectSchema as AiChatMinOrderByAggregateInputObjectSchema } from './AiChatMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  messages: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AiChatCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AiChatMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AiChatMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AiChatOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AiChatOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatOrderByWithAggregationInput>;
export const AiChatOrderByWithAggregationInputObjectZodSchema = makeSchema();
