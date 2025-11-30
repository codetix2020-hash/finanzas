import * as z from 'zod';
export const TwoFactorAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    secret: z.number(),
    backupCodes: z.number(),
    userId: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    secret: z.string().nullable(),
    backupCodes: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    secret: z.string().nullable(),
    backupCodes: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional()});