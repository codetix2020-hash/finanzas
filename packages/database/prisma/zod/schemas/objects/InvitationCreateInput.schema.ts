import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema as OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema } from './OrganizationCreateNestedOneWithoutInvitationsInput.schema';
import { UserCreateNestedOneWithoutInvitationsInputObjectSchema as UserCreateNestedOneWithoutInvitationsInputObjectSchema } from './UserCreateNestedOneWithoutInvitationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  role: z.string().optional().nullable(),
  status: z.string(),
  expiresAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutInvitationsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutInvitationsInputObjectSchema)
}).strict();
export const InvitationCreateInputObjectSchema: z.ZodType<Prisma.InvitationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateInput>;
export const InvitationCreateInputObjectZodSchema = makeSchema();
