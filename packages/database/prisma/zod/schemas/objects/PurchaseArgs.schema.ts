import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseSelectObjectSchema as PurchaseSelectObjectSchema } from './PurchaseSelect.schema';
import { PurchaseIncludeObjectSchema as PurchaseIncludeObjectSchema } from './PurchaseInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PurchaseSelectObjectSchema).optional(),
  include: z.lazy(() => PurchaseIncludeObjectSchema).optional()
}).strict();
export const PurchaseArgsObjectSchema = makeSchema();
export const PurchaseArgsObjectZodSchema = makeSchema();
