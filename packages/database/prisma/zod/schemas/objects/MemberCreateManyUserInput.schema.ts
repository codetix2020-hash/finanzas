import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date()
}).strict();
export const MemberCreateManyUserInputObjectSchema: z.ZodType<Prisma.MemberCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateManyUserInput>;
export const MemberCreateManyUserInputObjectZodSchema = makeSchema();
