import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  secret: z.literal(true).optional(),
  backupCodes: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const TwoFactorMinAggregateInputObjectSchema: z.ZodType<Prisma.TwoFactorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorMinAggregateInputType>;
export const TwoFactorMinAggregateInputObjectZodSchema = makeSchema();
