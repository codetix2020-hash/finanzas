import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { AiChatScalarWhereInputObjectSchema as AiChatScalarWhereInputObjectSchema } from './AiChatScalarWhereInput.schema';
import { AiChatUpdateManyMutationInputObjectSchema as AiChatUpdateManyMutationInputObjectSchema } from './AiChatUpdateManyMutationInput.schema';
import { AiChatUncheckedUpdateManyWithoutUserInputObjectSchema as AiChatUncheckedUpdateManyWithoutUserInputObjectSchema } from './AiChatUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiChatScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AiChatUpdateManyMutationInputObjectSchema), z.lazy(() => AiChatUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AiChatUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AiChatUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiChatUpdateManyWithWhereWithoutUserInput>;
export const AiChatUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
