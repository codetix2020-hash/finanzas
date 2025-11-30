import * as z from 'zod';
// prettier-ignore
export const TwoFactorInputSchema = z.object({
    id: z.string(),
    secret: z.string(),
    backupCodes: z.string(),
    userId: z.string(),
    user: z.unknown()
}).strict();

export type TwoFactorInputType = z.infer<typeof TwoFactorInputSchema>;
