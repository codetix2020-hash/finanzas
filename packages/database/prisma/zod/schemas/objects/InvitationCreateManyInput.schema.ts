import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  inviterId: z.string()
}).strict();
export const InvitationCreateManyInputObjectSchema: z.ZodType<Prisma.InvitationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateManyInput>;
export const InvitationCreateManyInputObjectZodSchema = makeSchema();
