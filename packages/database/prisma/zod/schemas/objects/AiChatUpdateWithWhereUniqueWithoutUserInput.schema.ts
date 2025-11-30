import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema';
import { AiChatUpdateWithoutUserInputObjectSchema as AiChatUpdateWithoutUserInputObjectSchema } from './AiChatUpdateWithoutUserInput.schema';
import { AiChatUncheckedUpdateWithoutUserInputObjectSchema as AiChatUncheckedUpdateWithoutUserInputObjectSchema } from './AiChatUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AiChatUpdateWithoutUserInputObjectSchema), z.lazy(() => AiChatUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AiChatUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AiChatUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUpdateWithWhereUniqueWithoutUserInput>;
export const AiChatUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
