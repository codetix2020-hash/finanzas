import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  organizationId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AiChatMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiChatMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatMaxOrderByAggregateInput>;
export const AiChatMaxOrderByAggregateInputObjectZodSchema = makeSchema();
