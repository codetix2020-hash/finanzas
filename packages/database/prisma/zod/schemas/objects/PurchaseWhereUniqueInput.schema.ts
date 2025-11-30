import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  subscriptionId: z.string().optional()
}).strict();
export const PurchaseWhereUniqueInputObjectSchema: z.ZodType<Prisma.PurchaseWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseWhereUniqueInput>;
export const PurchaseWhereUniqueInputObjectZodSchema = makeSchema();
