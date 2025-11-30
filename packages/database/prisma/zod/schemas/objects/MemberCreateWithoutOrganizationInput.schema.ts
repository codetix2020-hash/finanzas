import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateNestedOneWithoutMembersInputObjectSchema as UserCreateNestedOneWithoutMembersInputObjectSchema } from './UserCreateNestedOneWithoutMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: z.string(),
  createdAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const MemberCreateWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.MemberCreateWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateWithoutOrganizationInput>;
export const MemberCreateWithoutOrganizationInputObjectZodSchema = makeSchema();
