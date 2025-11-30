import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const CostTrackingWhereUniqueInputObjectSchema: z.ZodType<Prisma.CostTrackingWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CostTrackingWhereUniqueInput>;
export const CostTrackingWhereUniqueInputObjectZodSchema = makeSchema();
