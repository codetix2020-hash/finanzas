import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutAgentDecisionsInputObjectSchema as OrganizationCreateWithoutAgentDecisionsInputObjectSchema } from './OrganizationCreateWithoutAgentDecisionsInput.schema';
import { OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema as OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUncheckedCreateWithoutAgentDecisionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutAgentDecisionsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutAgentDecisionsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutAgentDecisionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutAgentDecisionsInput>;
export const OrganizationCreateOrConnectWithoutAgentDecisionsInputObjectZodSchema = makeSchema();
