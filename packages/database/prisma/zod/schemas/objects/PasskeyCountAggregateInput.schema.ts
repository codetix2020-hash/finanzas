import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  publicKey: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  credentialID: z.literal(true).optional(),
  counter: z.literal(true).optional(),
  deviceType: z.literal(true).optional(),
  backedUp: z.literal(true).optional(),
  transports: z.literal(true).optional(),
  aaguid: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PasskeyCountAggregateInputObjectSchema: z.ZodType<Prisma.PasskeyCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PasskeyCountAggregateInputType>;
export const PasskeyCountAggregateInputObjectZodSchema = makeSchema();
