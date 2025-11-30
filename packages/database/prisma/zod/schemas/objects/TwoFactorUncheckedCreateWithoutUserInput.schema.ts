import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  secret: z.string(),
  backupCodes: z.string()
}).strict();
export const TwoFactorUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUncheckedCreateWithoutUserInput>;
export const TwoFactorUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
