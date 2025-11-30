import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserCreateNestedOneWithoutPasskeysInputObjectSchema as UserCreateNestedOneWithoutPasskeysInputObjectSchema } from './UserCreateNestedOneWithoutPasskeysInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  publicKey: z.string(),
  credentialID: z.string(),
  counter: z.number().int(),
  deviceType: z.string(),
  backedUp: z.boolean(),
  transports: z.string().optional().nullable(),
  aaguid: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutPasskeysInputObjectSchema)
}).strict();
export const PasskeyCreateInputObjectSchema: z.ZodType<Prisma.PasskeyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyCreateInput>;
export const PasskeyCreateInputObjectZodSchema = makeSchema();
