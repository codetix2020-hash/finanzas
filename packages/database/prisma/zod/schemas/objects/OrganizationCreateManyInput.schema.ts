import * as z from 'zod';
import type { Prisma } from '../../../generated/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  paymentsCustomerId: z.string().optional().nullable()
}).strict();
export const OrganizationCreateManyInputObjectSchema: z.ZodType<Prisma.OrganizationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateManyInput>;
export const OrganizationCreateManyInputObjectZodSchema = makeSchema();
