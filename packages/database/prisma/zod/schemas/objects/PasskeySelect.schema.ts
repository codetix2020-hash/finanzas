import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  publicKey: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  credentialID: z.boolean().optional(),
  counter: z.boolean().optional(),
  deviceType: z.boolean().optional(),
  backedUp: z.boolean().optional(),
  transports: z.boolean().optional(),
  aaguid: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const PasskeySelectObjectSchema: z.ZodType<Prisma.PasskeySelect> = makeSchema() as unknown as z.ZodType<Prisma.PasskeySelect>;
export const PasskeySelectObjectZodSchema = makeSchema();
