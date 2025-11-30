import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  organization: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  organizationId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  customerId: z.boolean().optional(),
  subscriptionId: z.boolean().optional(),
  productId: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const PurchaseSelectObjectSchema: z.ZodType<Prisma.PurchaseSelect> = makeSchema() as unknown as z.ZodType<Prisma.PurchaseSelect>;
export const PurchaseSelectObjectZodSchema = makeSchema();
