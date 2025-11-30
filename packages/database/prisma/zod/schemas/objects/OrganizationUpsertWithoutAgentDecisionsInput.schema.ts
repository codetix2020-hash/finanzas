import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationUpdateWithoutAgentDecisionsInputObjectSchema as OrganizationUpdateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUpdateWithoutAgentDecisionsInput.schema';
import { OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema as OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutAgentDecisionsInput.schema';
import { OrganizationCreateWithoutAgentDecisionsInputObjectSchema as OrganizationCreateWithoutAgentDecisionsInputObjectSchema } from './OrganizationCreateWithoutAgentDecisionsInput.schema';
import { OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema as OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUncheckedCreateWithoutAgentDecisionsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutAgentDecisionsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutAgentDecisionsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutAgentDecisionsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutAgentDecisionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutAgentDecisionsInput>;
export const OrganizationUpsertWithoutAgentDecisionsInputObjectZodSchema = makeSchema();
