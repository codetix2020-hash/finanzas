import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatCreateWithoutOrganizationInputObjectSchema as AiChatCreateWithoutOrganizationInputObjectSchema } from './AiChatCreateWithoutOrganizationInput.schema';
import { AiChatUncheckedCreateWithoutOrganizationInputObjectSchema as AiChatUncheckedCreateWithoutOrganizationInputObjectSchema } from './AiChatUncheckedCreateWithoutOrganizationInput.schema';
import { AiChatCreateOrConnectWithoutOrganizationInputObjectSchema as AiChatCreateOrConnectWithoutOrganizationInputObjectSchema } from './AiChatCreateOrConnectWithoutOrganizationInput.schema';
import { AiChatCreateManyOrganizationInputEnvelopeObjectSchema as AiChatCreateManyOrganizationInputEnvelopeObjectSchema } from './AiChatCreateManyOrganizationInputEnvelope.schema';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiChatCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatCreateWithoutOrganizationInputObjectSchema).array(), z.lazy(() => AiChatUncheckedCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUncheckedCreateWithoutOrganizationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AiChatCreateOrConnectWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatCreateOrConnectWithoutOrganizationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AiChatCreateManyOrganizationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AiChatWhereUniqueInputObjectSchema), z.lazy(() => AiChatWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AiChatUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AiChatUncheckedCreateNestedManyWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUncheckedCreateNestedManyWithoutOrganizationInput>;
export const AiChatUncheckedCreateNestedManyWithoutOrganizationInputObjectZodSchema = makeSchema();
