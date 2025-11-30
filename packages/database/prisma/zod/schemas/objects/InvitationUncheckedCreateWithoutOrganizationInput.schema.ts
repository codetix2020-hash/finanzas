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
export const InvitationUncheckedCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedCreateWithoutOrganizationInput>;
export const InvitationUncheckedCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
