import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCreateWithoutAiChatsInputObjectSchema as OrganizationCreateWithoutAiChatsInputObjectSchema } from './OrganizationCreateWithoutAiChatsInput.schema';
import { OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema as OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema } from './OrganizationUncheckedCreateWithoutAiChatsInput.schema';
import { OrganizationCreateOrConnectWithoutAiChatsInputObjectSchema as OrganizationCreateOrConnectWithoutAiChatsInputObjectSchema } from './OrganizationCreateOrConnectWithoutAiChatsInput.schema';
import { OrganizationUpsertWithoutAiChatsInputObjectSchema as OrganizationUpsertWithoutAiChatsInputObjectSchema } from './OrganizationUpsertWithoutAiChatsInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './OrganizationWhereUniqueInput.schema';
import { OrganizationUpdateToOneWithWhereWithoutAiChatsInputObjectSchema as OrganizationUpdateToOneWithWhereWithoutAiChatsInputObjectSchema } from './OrganizationUpdateToOneWithWhereWithoutAiChatsInput.schema';
import { OrganizationUpdateWithoutAiChatsInputObjectSchema as OrganizationUpdateWithoutAiChatsInputObjectSchema } from './OrganizationUpdateWithoutAiChatsInput.schema';
import { OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema as OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutAiChatsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganizationCreateWithoutAiChatsInputObjectSchema), z.lazy(() => OrganizationUncheckedCreateWithoutAiChatsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutAiChatsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutAiChatsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganizationUpdateToOneWithWhereWithoutAiChatsInputObjectSchema), z.lazy(() => OrganizationUpdateWithoutAiChatsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema)]).optional()
}).strict();
export const OrganizationUpdateOneWithoutAiChatsNestedInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutAiChatsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateOneWithoutAiChatsNestedInput>;
export const OrganizationUpdateOneWithoutAiChatsNestedInputObjectZodSchema = makeSchema();
