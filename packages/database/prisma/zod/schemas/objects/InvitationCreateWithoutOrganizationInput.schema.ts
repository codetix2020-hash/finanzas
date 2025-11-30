import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateNestedOneWithoutInvitationsInputObjectSchema as UserCreateNestedOneWithoutInvitationsInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutInvitationsInputObjectSchema)
}).strict();
export const InvitationCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.InvitationCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateWithoutOrganizationInput>;
export const InvitationCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
