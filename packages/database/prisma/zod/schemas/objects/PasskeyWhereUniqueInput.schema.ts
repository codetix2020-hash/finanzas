import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const PasskeyWhereUniqueInputObjectSchema: z.ZodType<Prisma.PasskeyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyWhereUniqueInput>;
export const PasskeyWhereUniqueInputObjectZodSchema = makeSchema();
