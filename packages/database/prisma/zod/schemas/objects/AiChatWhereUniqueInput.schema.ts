import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AiChatWhereUniqueInputObjectSchema: z.ZodType<Prisma.AiChatWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatWhereUniqueInput>;
export const AiChatWhereUniqueInputObjectZodSchema = makeSchema();
