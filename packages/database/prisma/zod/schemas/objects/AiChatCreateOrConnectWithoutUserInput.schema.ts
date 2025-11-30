import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema';
import { AiChatCreateWithoutUserInputObjectSchema as AiChatCreateWithoutUserInputObjectSchema } from './AiChatCreateWithoutUserInput.schema';
import { AiChatUncheckedCreateWithoutUserInputObjectSchema as AiChatUncheckedCreateWithoutUserInputObjectSchema } from './AiChatUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiChatCreateWithoutUserInputObjectSchema), z.lazy(() => AiChatUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AiChatCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AiChatCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateOrConnectWithoutUserInput>;
export const AiChatCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
