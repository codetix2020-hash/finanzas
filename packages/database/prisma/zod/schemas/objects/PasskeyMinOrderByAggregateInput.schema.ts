import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  publicKey: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  credentialID: SortOrderSchema.optional(),
  counter: SortOrderSchema.optional(),
  deviceType: SortOrderSchema.optional(),
  backedUp: SortOrderSchema.optional(),
  transports: SortOrderSchema.optional(),
  aaguid: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const PasskeyMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PasskeyMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyMinOrderByAggregateInput>;
export const PasskeyMinOrderByAggregateInputObjectZodSchema = makeSchema();
