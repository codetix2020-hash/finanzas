import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { MemberOrganizationIdUserIdCompoundUniqueInputObjectSchema as MemberOrganizationIdUserIdCompoundUniqueInputObjectSchema } from './MemberOrganizationIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  organizationId_userId: z.lazy(() => MemberOrganizationIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const MemberWhereUniqueInputObjectSchema: z.ZodType<Prisma.MemberWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberWhereUniqueInput>;
export const MemberWhereUniqueInputObjectZodSchema = makeSchema();
