import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  organizationId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AiChatMaxAggregateInputObjectSchema: z.ZodType<Prisma.AiChatMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiChatMaxAggregateInputType>;
export const AiChatMaxAggregateInputObjectZodSchema = makeSchema();
