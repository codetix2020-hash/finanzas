import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PasskeyWhereInputObjectSchema as PasskeyWhereInputObjectSchema } from './PasskeyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PasskeyWhereInputObjectSchema).optional(),
  some: z.lazy(() => PasskeyWhereInputObjectSchema).optional(),
  none: z.lazy(() => PasskeyWhereInputObjectSchema).optional()
}).strict();
export const PasskeyListRelationFilterObjectSchema: z.ZodType<Prisma.PasskeyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyListRelationFilter>;
export const PasskeyListRelationFilterObjectZodSchema = makeSchema();
