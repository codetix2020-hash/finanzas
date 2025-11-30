import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatCreateWithoutUserInputObjectSchema as AiChatCreateWithoutUserInputObjectSchema } from './AiChatCreateWithoutUserInput.schema';
import { AiChatUncheckedCreateWithoutUserInputObjectSchema as AiChatUncheckedCreateWithoutUserInputObjectSchema } from './AiChatUncheckedCreateWithoutUserInput.schema';
import { AiChatCreateOrConnectWithoutUserInputObjectSchema as AiChatCreateOrConnectWithoutUserInputObjectSchema } from './AiChatCreateOrConnectWithoutUserInput.schema';
import { AiChatUpsertWithWhereUniqueWithoutUserInputObjectSchema as AiChatUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AiChatUpsertWithWhereUniqueWithoutUserInput.schema';
import { AiChatCreateManyUserInputEnvelopeObjectSchema as AiChatCreateManyUserInputEnvelopeObjectSchema } from './AiChatCreateManyUserInputEnvelope.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema';
import { AiChatUpdateWithWhereUniqueWithoutUserInputObjectSchema as AiChatUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AiChatUpdateWithWhereUniqueWithoutUserInput.schema';
import { AiChatUpdateManyWithWhereWithoutUserInputObjectSchema as AiChatUpdateManyWithWhereWithoutUserInputObjectSchema } from './AiChatUpdateManyWithWhereWithoutUserInput.schema';
import { AiChatScalarWhereInputObjectSchema as AiChatScalarWhereInputObjectSchema } from './AiChatScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiChatCreateWithoutUserInputObjectSchema), z.lazy(() => AiChatCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AiChatUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AiChatUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AiChatCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AiChatCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AiChatUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AiChatUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AiChatCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AiChatUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AiChatUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AiChatUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AiChatUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AiChatScalarWhereInputObjectSchema), z.lazy(() => AiChatScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AiChatUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AiChatUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUncheckedUpdateManyWithoutUserNestedInput>;
export const AiChatUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
