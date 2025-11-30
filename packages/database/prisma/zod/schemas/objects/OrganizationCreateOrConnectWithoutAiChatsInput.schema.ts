import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationCreateWithoutAiChatsInputObjectSchema as OrganizationCreateWithoutAiChatsInputObjectSchema } from './OrganizationCreateWithoutAiChatsInput.schema';
import { OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema as OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema } from './OrganizationUncheckedCreateWithoutAiChatsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganizationCreateWithoutAiChatsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema)])
}).strict();
export const OrganizationCreateOrConnectWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateOrConnectWithoutAiChatsInput>;
export const OrganizationCreateOrConnectWithoutAiChatsInputObjectZodSchema = makeSchema();
