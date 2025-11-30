import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  secret: z.string(),
  backupCodes: z.string()
}).strict();
export const TwoFactorCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCreateWithoutUserInput>;
export const TwoFactorCreateWithoutUserInputObjectZodSchema = makeSchema();
