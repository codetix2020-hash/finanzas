import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  secret: z.literal(true).optional(),
  backupCodes: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TwoFactorCountAggregateInputObjectSchema: z.ZodType<Prisma.TwoFactorCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCountAggregateInputType>;
export const TwoFactorCountAggregateInputObjectZodSchema = makeSchema();
