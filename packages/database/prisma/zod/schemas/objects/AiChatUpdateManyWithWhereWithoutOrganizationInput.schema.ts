import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatScalarWhereInputObjectSchema as AiChatScalarWhereInputObjectSchema } from './AiChatScalarWhereInput.schema';
import { AiChatUpdateManyMutationInputObjectSchema as AiChatUpdateManyMutationInputObjectSchema } from './AiChatUpdateManyMutationInput.schema';
import { AiChatUncheckedUpdateManyWithoutOrganizationInputObjectSchema as AiChatUncheckedUpdateManyWithoutOrganizationInputObjectSchema } from './AiChatUncheckedUpdateManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AiChatUpdateManyMutationInputObjectSchema), z.lazy(() => AiChatUncheckedUpdateManyWithoutOrganizationInputObjectSchema)])
}).strict();
export const AiChatUpdateManyWithWhereWithoutOrganizationInputObjectSchema: z.ZodType<Prisma.AiChatUpdateManyWithWhereWithoutOrganizationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUpdateManyWithWhereWithoutOrganizationInput>;
export const AiChatUpdateManyWithWhereWithoutOrganizationInputObjectZodSchema = makeSchema();
