import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { DecisionSchema } from '../enums/Decision.schema'

const makeSchema = () => z.object({
  set: DecisionSchema.optional()
}).strict();
export const EnumDecisionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDecisionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDecisionFieldUpdateOperationsInput>;
export const EnumDecisionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
