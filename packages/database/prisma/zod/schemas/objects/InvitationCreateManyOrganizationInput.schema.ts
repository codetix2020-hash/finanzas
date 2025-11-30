import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  inviterId: z.string()
}).strict();
export const InvitationCreateManyOrganizationInputObjectSchema: z.ZodType<Prisma.InvitationCreateManyOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateManyOrganizationInput>;
export const InvitationCreateManyOrganizationInputObjectZodSchema = makeSchema();
