import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const passkeyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PasskeyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PasskeyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PasskeyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PasskeyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PasskeyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  publicKey: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  credentialID: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  counter: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  deviceType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  backedUp: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  transports: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  aaguid: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const PasskeyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PasskeyScalarWhereWithAggregatesInput> = passkeyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PasskeyScalarWhereWithAggregatesInput>;
export const PasskeyScalarWhereWithAggregatesInputObjectZodSchema = passkeyscalarwherewithaggregatesinputSchema;
