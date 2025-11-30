import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseWhereInputObjectSchema as PurchaseWhereInputObjectSchema } from './PurchaseWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PurchaseWhereInputObjectSchema).optional(),
  some: z.lazy(() => PurchaseWhereInputObjectSchema).optional(),
  none: z.lazy(() => PurchaseWhereInputObjectSchema).optional()
}).strict();
export const PurchaseListRelationFilterObjectSchema: z.ZodType<Prisma.PurchaseListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseListRelationFilter>;
export const PurchaseListRelationFilterObjectZodSchema = makeSchema();
