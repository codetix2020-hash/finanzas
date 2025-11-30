import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const twofactorscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TwoFactorScalarWhereInputObjectSchema), z.lazy(() => TwoFactorScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TwoFactorScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TwoFactorScalarWhereInputObjectSchema), z.lazy(() => TwoFactorScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  secret: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  backupCodes: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TwoFactorScalarWhereInputObjectSchema: z.ZodType<Prisma.TwoFactorScalarWhereInput> = twofactorscalarwhereinputSchema as unknown as z.ZodType<Prisma.TwoFactorScalarWhereInput>;
export const TwoFactorScalarWhereInputObjectZodSchema = twofactorscalarwhereinputSchema;
