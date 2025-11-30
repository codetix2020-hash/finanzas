import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TwoFactorCountOrderByAggregateInputObjectSchema as TwoFactorCountOrderByAggregateInputObjectSchema } from './TwoFactorCountOrderByAggregateInput.schema';
import { TwoFactorMaxOrderByAggregateInputObjectSchema as TwoFactorMaxOrderByAggregateInputObjectSchema } from './TwoFactorMaxOrderByAggregateInput.schema';
import { TwoFactorMinOrderByAggregateInputObjectSchema as TwoFactorMinOrderByAggregateInputObjectSchema } from './TwoFactorMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  secret: SortOrderSchema.optional(),
  backupCodes: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => TwoFactorCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TwoFactorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TwoFactorMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TwoFactorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TwoFactorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorOrderByWithAggregationInput>;
export const TwoFactorOrderByWithAggregationInputObjectZodSchema = makeSchema();
