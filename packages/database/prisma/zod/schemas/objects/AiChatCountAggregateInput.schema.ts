import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  messages: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AiChatCountAggregateInputObjectSchema: z.ZodType<Prisma.AiChatCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCountAggregateInputType>;
export const AiChatCountAggregateInputObjectZodSchema = makeSchema();
