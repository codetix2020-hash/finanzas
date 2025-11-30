import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  publicKey: z.string(),
  userId: z.string(),
  credentialID: z.string(),
  counter: z.number().int(),
  deviceType: z.string(),
  backedUp: z.boolean(),
  transports: z.string().optional().nullable(),
  aaguid: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const PasskeyCreateManyInputObjectSchema: z.ZodType<Prisma.PasskeyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyCreateManyInput>;
export const PasskeyCreateManyInputObjectZodSchema = makeSchema();
