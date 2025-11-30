import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema';
import { AiChatUpdateWithoutOrganizationInputObjectSchema as AiChatUpdateWithoutOrganizationInputObjectSchema } from './AiChatUpdateWithoutOrganizationInput.schema';
import { AiChatUncheckedUpdateWithoutOrganizationInputObjectSchema as AiChatUncheckedUpdateWithoutOrganizationInputObjectSchema } from './AiChatUncheckedUpdateWithoutOrganizationInput.schema';
import { AiChatCreateWithoutOrganizationInputObjectSchema as AiChatCreateWithoutOrganizationInputObjectSchema } from './AiChatCreateWithoutOrganizationInput.schema';
import { AiChatUncheckedCreateWithoutOrganizationInputObjectSchema as AiChatUncheckedCreateWithoutOrganizationInputObjectSchema } from './AiChatUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AiChatUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUncheckedUpdateWithoutOrganizationInputObjectSchema)]),
  create: z.union([z.lazy(() => AiChatCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const AiChatUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AiChatUpsertWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUpsertWithWhereUniqueWithoutOrganizationInput>;
export const AiChatUpsertWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
