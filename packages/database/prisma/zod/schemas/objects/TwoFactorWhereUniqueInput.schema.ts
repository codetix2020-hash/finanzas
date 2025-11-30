import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TwoFactorWhereUniqueInputObjectSchema: z.ZodType<Prisma.TwoFactorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorWhereUniqueInput>;
export const TwoFactorWhereUniqueInputObjectZodSchema = makeSchema();
