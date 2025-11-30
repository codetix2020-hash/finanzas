import * as z from 'zod';
export const PasskeyAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    publicKey: z.number(),
    userId: z.number(),
    user: z.number(),
    credentialID: z.number(),
    counter: z.number(),
    deviceType: z.number(),
    backedUp: z.number(),
    transports: z.number(),
    aaguid: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    counter: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    counter: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    publicKey: z.string().nullable(),
    userId: z.string().nullable(),
    credentialID: z.string().nullable(),
    counter: z.number().int().nullable(),
    deviceType: z.string().nullable(),
    transports: z.string().nullable(),
    aaguid: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    publicKey: z.string().nullable(),
    userId: z.string().nullable(),
    credentialID: z.string().nullable(),
    counter: z.number().int().nullable(),
    deviceType: z.string().nullable(),
    transports: z.string().nullable(),
    aaguid: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});