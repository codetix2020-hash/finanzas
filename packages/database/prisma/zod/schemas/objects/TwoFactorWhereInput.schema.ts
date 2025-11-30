import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const twofactorwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TwoFactorWhereInputObjectSchema), z.lazy(() => TwoFactorWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TwoFactorWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TwoFactorWhereInputObjectSchema), z.lazy(() => TwoFactorWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  secret: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  backupCodes: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const TwoFactorWhereInputObjectSchema: z.ZodType<Prisma.TwoFactorWhereInput> = twofactorwhereinputSchema as unknown as z.ZodType<Prisma.TwoFactorWhereInput>;
export const TwoFactorWhereInputObjectZodSchema = twofactorwhereinputSchema;
