import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema as OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema } from './OrganizationCreateNestedOneWithoutInvitationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema)
}).strict();
export const InvitationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.InvitationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateWithoutUserInput>;
export const InvitationCreateWithoutUserInputObjectZodSchema = makeSchema();
