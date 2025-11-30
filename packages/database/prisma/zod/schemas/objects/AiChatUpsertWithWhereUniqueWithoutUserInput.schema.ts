import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema';
import { AiChatUpdateWithoutUserInputObjectSchema as AiChatUpdateWithoutUserInputObjectSchema } from './AiChatUpdateWithoutUserInput.schema';
import { AiChatUncheckedUpdateWithoutUserInputObjectSchema as AiChatUncheckedUpdateWithoutUserInputObjectSchema } from './AiChatUncheckedUpdateWithoutUserInput.schema';
import { AiChatCreateWithoutUserInputObjectSchema as AiChatCreateWithoutUserInputObjectSchema } from './AiChatCreateWithoutUserInput.schema';
import { AiChatUncheckedCreateWithoutUserInputObjectSchema as AiChatUncheckedCreateWithoutUserInputObjectSchema } from './AiChatUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AiChatUpdateWithoutUserInputObjectSchema), z.lazy(() => AiChatUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AiChatCreateWithoutUserInputObjectSchema), z.lazy(() => AiChatUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AiChatUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AiChatUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUpsertWithWhereUniqueWithoutUserInput>;
export const AiChatUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
