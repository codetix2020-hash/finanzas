import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutAiChatsInputObjectSchema as OrganizationCreateWithoutAiChatsInputObjectSchema } from './OrganizationCreateWithoutAiChatsInput.schema';
import { OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema as OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema } from './OrganizationUncheckedCreateWithoutAiChatsInput.schema';
import { OrganizationCreateOrConnectWithoutAiChatsInputObjectSchema as OrganizationCreateOrConnectWithoutAiChatsInputObjectSchema } from './OrganizationCreateOrConnectWithoutAiChatsInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutAiChatsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutAiChatsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganizationCreateNestedOneWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateNestedOneWithoutAiChatsInput>;
export const OrganizationCreateNestedOneWithoutAiChatsInputObjectZodSchema = makeSchema();
