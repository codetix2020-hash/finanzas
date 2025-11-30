import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatCreateWithoutUserInputObjectSchema as AiChatCreateWithoutUserInputObjectSchema } from './AiChatCreateWithoutUserInput.schema';
import { AiChatUncheckedCreateWithoutUserInputObjectSchema as AiChatUncheckedCreateWithoutUserInputObjectSchema } from './AiChatUncheckedCreateWithoutUserInput.schema';
import { AiChatCreateOrConnectWithoutUserInputObjectSchema as AiChatCreateOrConnectWithoutUserInputObjectSchema } from './AiChatCreateOrConnectWithoutUserInput.schema';
import { AiChatCreateManyUserInputEnvelopeObjectSchema as AiChatCreateManyUserInputEnvelopeObjectSchema } from './AiChatCreateManyUserInputEnvelope.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiChatCreateWithoutUserInputObjectSchema), z.lazy(() => AiChatCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AiChatUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AiChatUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AiChatCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AiChatCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AiChatCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AiChatCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AiChatCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateNestedManyWithoutUserInput>;
export const AiChatCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
