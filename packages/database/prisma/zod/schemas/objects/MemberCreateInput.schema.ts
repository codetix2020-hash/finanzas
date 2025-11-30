import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateNestedOneWithoutMembersInputObjectSchema as OrganizationCreateNestedOneWithoutMembersInputObjectSchema } from './OrganizationCreateNestedOneWithoutMembersInput.schema';
import { UserCreateNestedOneWithoutMembersInputObjectSchema as UserCreateNestedOneWithoutMembersInputObjectSchema } from './UserCreateNestedOneWithoutMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: z.string(),
  createdAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutMembersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const MemberCreateInputObjectSchema: z.ZodType<Prisma.MemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateInput>;
export const MemberCreateInputObjectZodSchema = makeSchema();
