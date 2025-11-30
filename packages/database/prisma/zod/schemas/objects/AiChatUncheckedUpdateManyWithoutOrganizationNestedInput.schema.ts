import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatCreateWithoutOrganizationInputObjectSchema as AiChatCreateWithoutOrganizationInputObjectSchema } from './AiChatCreateWithoutOrganizationInput.schema';
import { AiChatUncheckedCreateWithoutOrganizationInputObjectSchema as AiChatUncheckedCreateWithoutOrganizationInputObjectSchema } from './AiChatUncheckedCreateWithoutOrganizationInput.schema';
import { AiChatCreateOrConnectWithoutOrganizationInputObjectSchema as AiChatCreateOrConnectWithoutOrganizationInputObjectSchema } from './AiChatCreateOrConnectWithoutOrganizationInput.schema';
import { AiChatUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema as AiChatUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema } from './AiChatUpsertWithWhereUniqueWithoutOrganizationInput.schema';
import { AiChatCreateManyOrganizationInputEnvelopeObjectSchema as AiChatCreateManyOrganizationInputEnvelopeObjectSchema } from './AiChatCreateManyOrganizationInputEnvelope.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema';
import { AiChatUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema as AiChatUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema } from './AiChatUpdateWithWhereUniqueWithoutOrganizationInput.schema';
import { AiChatUpdateManyWithWhereWithoutOrganizationInputObjectSchema as AiChatUpdateManyWithWhereWithoutOrganizationInputObjectSchema } from './AiChatUpdateManyWithWhereWithoutOrganizationInput.schema';
import { AiChatScalarWhereInputObjectSchema as AiChatScalarWhereInputObjectSchema } from './AiChatScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiChatCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => AiChatUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AiChatCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AiChatUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUpsertWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AiChatCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AiChatUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUpdateWithWhereUniqueWithoutOrganizationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AiChatUpdateManyWithWhereWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUpdateManyWithWhereWithoutOrganizationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AiChatScalarWhereInputObjectSchema), z.lazy(() => AiChatScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AiChatUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema: z.ZodType<Prisma.AiChatUncheckedUpdateManyWithoutOrganizationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUncheckedUpdateManyWithoutOrganizationNestedInput>;
export const AiChatUncheckedUpdateManyWithoutOrganizationNestedInputObjectZodSchema = makeSchema();
