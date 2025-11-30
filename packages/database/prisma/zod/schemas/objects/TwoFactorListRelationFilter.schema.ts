import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { TwoFactorWhereInputObjectSchema as TwoFactorWhereInputObjectSchema } from './TwoFactorWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TwoFactorWhereInputObjectSchema).optional(),
  some: z.lazy(() => TwoFactorWhereInputObjectSchema).optional(),
  none: z.lazy(() => TwoFactorWhereInputObjectSchema).optional()
}).strict();
export const TwoFactorListRelationFilterObjectSchema: z.ZodType<Prisma.TwoFactorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorListRelationFilter>;
export const TwoFactorListRelationFilterObjectZodSchema = makeSchema();
