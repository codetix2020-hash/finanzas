import * as z from 'zod';
export const TwoFactorUpsertResultSchema = z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string(),
  user: z.unknown()
});