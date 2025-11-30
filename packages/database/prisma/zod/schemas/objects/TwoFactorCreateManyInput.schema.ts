import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string()
}).strict();
export const TwoFactorCreateManyInputObjectSchema: z.ZodType<Prisma.TwoFactorCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCreateManyInput>;
export const TwoFactorCreateManyInputObjectZodSchema = makeSchema();
