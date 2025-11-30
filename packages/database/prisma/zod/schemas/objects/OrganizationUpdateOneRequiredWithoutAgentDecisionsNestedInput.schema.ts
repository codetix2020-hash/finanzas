import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutAgentDecisionsInputObjectSchema as OrganizationCreateWithoutAgentDecisionsInputObjectSchema } from './OrganizationCreateWithoutAgentDecisionsInput.schema';
import { OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema as OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUncheckedCreateWithoutAgentDecisionsInput.schema';
import { OrganizationCreateOrConnectWithoutAgentDecisionsInputObjectSchema as OrganizationCreateOrConnectWithoutAgentDecisionsInputObjectSchema } from './OrganizationCreateOrConnectWithoutAgentDecisionsInput.schema';
import { OrganizationUpsertWithoutAgentDecisionsInputObjectSchema as OrganizationUpsertWithoutAgentDecisionsInputObjectSchema } from './OrganizationUpsertWithoutAgentDecisionsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutAgentDecisionsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutAgentDecisionsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutAgentDecisionsInput.schema';
import { OrganizationUpdateWithoutAgentDecisionsInputObjectSchema as OrganizationUpdateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUpdateWithoutAgentDecisionsInput.schema';
import { OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema as OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutAgentDecisionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutAgentDecisionsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutAgentDecisionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutAgentDecisionsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutAgentDecisionsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutAgentDecisionsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutAgentDecisionsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutAgentDecisionsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneRequiredWithoutAgentDecisionsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutAgentDecisionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneRequiredWithoutAgentDecisionsNestedInput>;
export const OrganizationUpdateOneRequiredWithoutAgentDecisionsNestedInputObjectZodSchema = makeSchema();
