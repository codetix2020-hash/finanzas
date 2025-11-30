import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  messages: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AiChatCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiChatCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCountOrderByAggregateInput>;
export const AiChatCountOrderByAggregateInputObjectZodSchema = makeSchema();
