import * as z from 'zod';
export const PasskeyUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string().optional(),
  publicKey: z.string(),
  userId: z.string(),
  user: z.unknown(),
  credentialID: z.string(),
  counter: z.number().int(),
  deviceType: z.string(),
  backedUp: z.boolean(),
  transports: z.string().optional(),
  aaguid: z.string().optional(),
  createdAt: z.date().optional()
}));