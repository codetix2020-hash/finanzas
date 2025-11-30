import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatWhereUniqueInputObjectSchema as AiChatWhereUniqueInputObjectSchema } from './AiChatWhereUniqueInput.schema';
import { AiChatCreateWithoutOrganizationInputObjectSchema as AiChatCreateWithoutOrganizationInputObjectSchema } from './AiChatCreateWithoutOrganizationInput.schema';
import { AiChatUncheckedCreateWithoutOrganizationInputObjectSchema as AiChatUncheckedCreateWithoutOrganizationInputObjectSchema } from './AiChatUncheckedCreateWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiChatCreateWithoutOrganizationInputObjectSchema), z.lazy(() => AiChatUncheckedCreateWithoutOrganizationInputObjectSchema)])
}).strict();
export const AiChatCreateOrConnectWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AiChatCreateOrConnectWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatCreateOrConnectWithoutOrganizationInput>;
export const AiChatCreateOrConnectWithoutOrganizationInputObjectZodSchema = makeSchema();
