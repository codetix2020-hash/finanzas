import * as z from 'zod';

export const SaasStatusSchema = z.enum(['ACTIVE', 'PAUSED', 'OPTIMIZING', 'KILLED'])

export type SaasStatus = z.infer<typeof SaasStatusSchema>;