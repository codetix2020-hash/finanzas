import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingSelectObjectSchema as CostTrackingSelectObjectSchema } from './CostTrackingSelect.schema';
import { CostTrackingIncludeObjectSchema as CostTrackingIncludeObjectSchema } from './CostTrackingInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CostTrackingSelectObjectSchema).optional(),
  include: z.lazy(() => CostTrackingIncludeObjectSchema).optional()
}).strict();
export const CostTrackingArgsObjectSchema = makeSchema();
export const CostTrackingArgsObjectZodSchema = makeSchema();
