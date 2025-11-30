import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { PurchaseWhereInputObjectSchema as PurchaseWhereInputObjectSchema } from './PurchaseWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PurchaseWhereInputObjectSchema).optional()
}).strict();
export const OrganizationCountOutputTypeCountPurchasesArgsObjectSchema = makeSchema();
export const OrganizationCountOutputTypeCountPurchasesArgsObjectZodSchema = makeSchema();
