import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const PurchaseIncludeObjectSchema: z.ZodType<Prisma.PurchaseInclude> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseInclude>;
export const PurchaseIncludeObjectZodSchema = makeSchema();
