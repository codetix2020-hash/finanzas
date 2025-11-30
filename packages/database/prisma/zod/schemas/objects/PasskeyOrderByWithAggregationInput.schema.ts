import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PasskeyCountOrderByAggregateInputObjectSchema as PasskeyCountOrderByAggregateInputObjectSchema } from './PasskeyCountOrderByAggregateInput.schema';
import { PasskeyAvgOrderByAggregateInputObjectSchema as PasskeyAvgOrderByAggregateInputObjectSchema } from './PasskeyAvgOrderByAggregateInput.schema';
import { PasskeyMaxOrderByAggregateInputObjectSchema as PasskeyMaxOrderByAggregateInputObjectSchema } from './PasskeyMaxOrderByAggregateInput.schema';
import { PasskeyMinOrderByAggregateInputObjectSchema as PasskeyMinOrderByAggregateInputObjectSchema } from './PasskeyMinOrderByAggregateInput.schema';
import { PasskeySumOrderByAggregateInputObjectSchema as PasskeySumOrderByAggregateInputObjectSchema } from './PasskeySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  publicKey: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  credentialID: SortOrderSchema.optional(),
  counter: SortOrderSchema.optional(),
  deviceType: SortOrderSchema.optional(),
  backedUp: SortOrderSchema.optional(),
  transports: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  aaguid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PasskeyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PasskeyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PasskeyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PasskeyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PasskeySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PasskeyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PasskeyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyOrderByWithAggregationInput>;
export const PasskeyOrderByWithAggregationInputObjectZodSchema = makeSchema();
