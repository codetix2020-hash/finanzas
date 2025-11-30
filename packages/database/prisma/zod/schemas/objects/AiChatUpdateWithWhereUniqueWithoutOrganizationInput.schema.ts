import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema';
import { AiChatUpdateWithoutOrganizationInputObjectSchema as AiChatUpdateWithoutOrganizationInputObjectSchema } from './AiChatUpdateWithoutOrganizationInput.schema';
import { AiChatUncheckedUpdateWithoutOrganizationInputObjectSchema as AiChatUncheckedUpdateWithoutOrganizationInputObjectSchema } from './AiChatUncheckedUpdateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AiChatUpdateWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUncheckedUpdateWithoutOrganizationInputObjectSchema)])
}).strict();
export const AiChatUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AiChatUpdateWithWhereUniqueWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUpdateWithWhereUniqueWithoutOrganizationInput>;
export const AiChatUpdateWithWhereUniqueWithoutOrganizationInputObjectZodSchema = makeSchema();
