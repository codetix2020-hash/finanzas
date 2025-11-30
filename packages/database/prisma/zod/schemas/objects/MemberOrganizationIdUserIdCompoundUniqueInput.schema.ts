import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  organizationId: z.string(),
  userId: z.string()
}).strict();
export const MemberOrganizationIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.MemberOrganizationIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberOrganizationIdUserIdCompoundUniqueInput>;
export const MemberOrganizationIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
