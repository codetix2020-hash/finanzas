import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { CostTrackingWhereInputObjectSchema as CostTrackingWhereInputObjectSchema } from './CostTrackingWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CostTrackingWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountCostTrackingsArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountCostTrackingsArgsObjectZodSchema = makeSchema();
