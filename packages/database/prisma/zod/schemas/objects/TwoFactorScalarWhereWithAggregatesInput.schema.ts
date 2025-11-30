import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const twofactorscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TwoFactorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TwoFactorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TwoFactorScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TwoFactorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TwoFactorScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  secret: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  backupCodes: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TwoFactorScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TwoFactorScalarWhereWithAggregatesInput> = twofactorscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TwoFactorScalarWhereWithAggregatesInput>;
export const TwoFactorScalarWhereWithAggregatesInputObjectZodSchema = twofactorscalarwherewithaggregatesinputSchema;
