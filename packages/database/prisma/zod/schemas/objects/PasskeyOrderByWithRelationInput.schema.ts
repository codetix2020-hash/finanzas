import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

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
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PasskeyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PasskeyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyOrderByWithRelationInput>;
export const PasskeyOrderByWithRelationInputObjectZodSchema = makeSchema();
