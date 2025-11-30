import * as z from 'zod';

export const DecisionSchema = z.enum(['SCALE', 'MAINTAIN', 'OPTIMIZE', 'KILL'])

export type Decision = z.infer<typeof DecisionSchema>;