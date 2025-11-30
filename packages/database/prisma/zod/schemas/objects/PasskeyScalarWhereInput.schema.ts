import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const passkeyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PasskeyScalarWhereInputObjectSchema), z.lazy(() => PasskeyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PasskeyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PasskeyScalarWhereInputObjectSchema), z.lazy(() => PasskeyScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  publicKey: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  credentialID: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  counter: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  deviceType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  backedUp: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  transports: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  aaguid: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const PasskeyScalarWhereInputObjectSchema: z.ZodType<Prisma.PasskeyScalarWhereInput> = passkeyscalarwhereinputSchema as unknown as z.ZodType<Prisma.PasskeyScalarWhereInput>;
export const PasskeyScalarWhereInputObjectZodSchema = passkeyscalarwhereinputSchema;
