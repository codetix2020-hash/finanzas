import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationUpdateWithoutAiChatsInputObjectSchema as OrganizationUpdateWithoutAiChatsInputObjectSchema } from './OrganizationUpdateWithoutAiChatsInput.schema';
import { OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema as OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutAiChatsInput.schema';
import { OrganizationCreateWithoutAiChatsInputObjectSchema as OrganizationCreateWithoutAiChatsInputObjectSchema } from './OrganizationCreateWithoutAiChatsInput.schema';
import { OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema as OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema } from './OrganizationUncheckedCreateWithoutAiChatsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganizationUpdateWithoutAiChatsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganizationCreateWithoutAiChatsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema)]),
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional()
}).strict();
export const OrganizationUpsertWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.OrganizationUpsertWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpsertWithoutAiChatsInput>;
export const OrganizationUpsertWithoutAiChatsInputObjectZodSchema = makeSchema();
