import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OrganizationScalarRelationFilterObjectSchema as OrganizationScalarRelationFilterObjectSchema } from './OrganizationScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const memberwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MemberWhereInputObjectSchema), z.lazy(() => MemberWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MemberWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MemberWhereInputObjectSchema), z.lazy(() => MemberWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organizationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  organization: z.union([z.lazy(() => OrganizationScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const MemberWhereInputObjectSchema: z.ZodType<Prisma.MemberWhereInput> = memberwhereinputSchema as unknown as z.ZodType<Prisma.MemberWhereInput>;
export const MemberWhereInputObjectZodSchema = memberwhereinputSchema;
