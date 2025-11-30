import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { OrganizationUpdateWithoutAiChatsInputObjectSchema as OrganizationUpdateWithoutAiChatsInputObjectSchema } from './OrganizationUpdateWithoutAiChatsInput.schema';
import { OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema as OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema } from './OrganizationUncheckedUpdateWithoutAiChatsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganizationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganizationUpdateWithoutAiChatsInputObjectSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutAiChatsInputObjectSchema)])
}).strict();
export const OrganizationUpdateToOneWithWhereWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutAiChatsInput>;
export const OrganizationUpdateToOneWithWhereWithoutAiChatsInputObjectZodSchema = makeSchema();
