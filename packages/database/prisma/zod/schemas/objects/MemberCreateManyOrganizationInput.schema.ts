import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date()
}).strict();
export const MemberCreateManyOrganizationInputObjectSchema: z.ZodType<Prisma.MemberCreateManyOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateManyOrganizationInput>;
export const MemberCreateManyOrganizationInputObjectZodSchema = makeSchema();
