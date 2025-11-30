import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateNestedOneWithoutMembersInputObjectSchema as OrganizationCreateNestedOneWithoutMembersInputObjectSchema } from './OrganizationCreateNestedOneWithoutMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: z.string(),
  createdAt: z.coerce.date(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutMembersInputObjectSchema)
}).strict();
export const MemberCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.MemberCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateWithoutUserInput>;
export const MemberCreateWithoutUserInputObjectZodSchema = makeSchema();
