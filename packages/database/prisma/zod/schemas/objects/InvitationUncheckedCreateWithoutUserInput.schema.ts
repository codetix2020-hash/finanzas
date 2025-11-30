import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId: z.string(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date()
}).strict();
export const InvitationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedCreateWithoutUserInput>;
export const InvitationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
