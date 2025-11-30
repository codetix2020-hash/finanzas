import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const passkeywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PasskeyWhereInputObjectSchema), z.lazy(() => PasskeyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PasskeyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PasskeyWhereInputObjectSchema), z.lazy(() => PasskeyWhereInputObjectSchema).array()]).optional(),
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
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const PasskeyWhereInputObjectSchema: z.ZodType<Prisma.PasskeyWhereInput> = passkeywhereinputSchema as unknown as z.ZodType<Prisma.PasskeyWhereInput>;
export const PasskeyWhereInputObjectZodSchema = passkeywhereinputSchema;
