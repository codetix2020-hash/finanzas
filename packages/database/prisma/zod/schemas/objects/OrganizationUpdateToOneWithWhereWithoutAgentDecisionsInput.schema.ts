import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutAgentDecisionsInputObjectSchema as OrganizationUpdateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUpdateWithoutAgentDecisionsInput.schema';
import { OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema as OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutAgentDecisionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutAgentDecisionsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutAgentDecisionsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutAgentDecisionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutAgentDecisionsInput>;
export const OrganizationUpdateToOneWithWhereWithoutAgentDecisionsInputObjectZodSchema = makeSchema();
