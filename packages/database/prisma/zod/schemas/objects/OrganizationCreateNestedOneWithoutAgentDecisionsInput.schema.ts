import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutAgentDecisionsInputObjectSchema as OrganizationCreateWithoutAgentDecisionsInputObjectSchema } from './OrganizationCreateWithoutAgentDecisionsInput.schema';
import { OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema as OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUncheckedCreateWithoutAgentDecisionsInput.schema';
import { OrganizationCreateOrConnectWithoutAgentDecisionsInputObjectSchema as OrganizationCreateOrConnectWithoutAgentDecisionsInputObjectSchema } from './OrganizationCreateOrConnectWithoutAgentDecisionsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutAgentDecisionsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutAgentDecisionsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutAgentDecisionsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutAgentDecisionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutAgentDecisionsInput>;
export const OrganizationCreateNestedOneWithoutAgentDecisionsInputObjectZodSchema = makeSchema();
