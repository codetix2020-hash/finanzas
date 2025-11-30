import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MemberListRelationFilterObjectSchema as MemberListRelationFilterObjectSchema } from './MemberListRelationFilter.schema';
import { InvitationListRelationFilterObjectSchema as InvitationListRelationFilterObjectSchema } from './InvitationListRelationFilter.schema';
import { PurchaseListRelationFilterObjectSchema as PurchaseListRelationFilterObjectSchema } from './PurchaseListRelationFilter.schema';
import { AiChatListRelationFilterObjectSchema as AiChatListRelationFilterObjectSchema } from './AiChatListRelationFilter.schema';
import { FinancialTransactionListRelationFilterObjectSchema as FinancialTransactionListRelationFilterObjectSchema } from './FinancialTransactionListRelationFilter.schema';
import { SaasMetricsListRelationFilterObjectSchema as SaasMetricsListRelationFilterObjectSchema } from './SaasMetricsListRelationFilter.schema';
import { CostTrackingListRelationFilterObjectSchema as CostTrackingListRelationFilterObjectSchema } from './CostTrackingListRelationFilter.schema';
import { AgentDecisionListRelationFilterObjectSchema as AgentDecisionListRelationFilterObjectSchema } from './AgentDecisionListRelationFilter.schema'

const organizationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganizationWhereInputObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganizationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganizationWhereInputObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  metadata: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  paymentsCustomerId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  members: z.lazy(() => MemberListRelationFilterObjectSchema).optional(),
  invitations: z.lazy(() => InvitationListRelationFilterObjectSchema).optional(),
  purchases: z.lazy(() => PurchaseListRelationFilterObjectSchema).optional(),
  aiChats: z.lazy(() => AiChatListRelationFilterObjectSchema).optional(),
  financialTransactions: z.lazy(() => FinancialTransactionListRelationFilterObjectSchema).optional(),
  saasMetrics: z.lazy(() => SaasMetricsListRelationFilterObjectSchema).optional(),
  costTrackings: z.lazy(() => CostTrackingListRelationFilterObjectSchema).optional(),
  agentDecisions: z.lazy(() => AgentDecisionListRelationFilterObjectSchema).optional()
}).strict();
export const OrganizationWhereInputObjectSchema: z.ZodType<Prisma.OrganizationWhereInput> = organizationwhereinputSchema as unknown as z.ZodType<Prisma.OrganizationWhereInput>;
export const OrganizationWhereInputObjectZodSchema = organizationwhereinputSchema;
