import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { MemberCreateNestedManyWithoutOrganizationInputObjectSchema as MemberCreateNestedManyWithoutOrganizationInputObjectSchema } from './MemberCreateNestedManyWithoutOrganizationInput.schema';
import { InvitationCreateNestedManyWithoutOrganizationInputObjectSchema as InvitationCreateNestedManyWithoutOrganizationInputObjectSchema } from './InvitationCreateNestedManyWithoutOrganizationInput.schema';
import { PurchaseCreateNestedManyWithoutOrganizationInputObjectSchema as PurchaseCreateNestedManyWithoutOrganizationInputObjectSchema } from './PurchaseCreateNestedManyWithoutOrganizationInput.schema';
import { AiChatCreateNestedManyWithoutOrganizationInputObjectSchema as AiChatCreateNestedManyWithoutOrganizationInputObjectSchema } from './AiChatCreateNestedManyWithoutOrganizationInput.schema';
import { SaasMetricsCreateNestedManyWithoutOrganizationInputObjectSchema as SaasMetricsCreateNestedManyWithoutOrganizationInputObjectSchema } from './SaasMetricsCreateNestedManyWithoutOrganizationInput.schema';
import { CostTrackingCreateNestedManyWithoutOrganizationInputObjectSchema as CostTrackingCreateNestedManyWithoutOrganizationInputObjectSchema } from './CostTrackingCreateNestedManyWithoutOrganizationInput.schema';
import { AgentDecisionCreateNestedManyWithoutOrganizationInputObjectSchema as AgentDecisionCreateNestedManyWithoutOrganizationInputObjectSchema } from './AgentDecisionCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  paymentsCustomerId: z.string().optional().nullable(),
  members: z.lazy(() => MemberCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  purchases: z.lazy(() => PurchaseCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  aiChats: z.lazy(() => AiChatCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  saasMetrics: z.lazy(() => SaasMetricsCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  costTrackings: z.lazy(() => CostTrackingCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  agentDecisions: z.lazy(() => AgentDecisionCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutFinancialTransactionsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutFinancialTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateWithoutFinancialTransactionsInput>;
export const OrganizationCreateWithoutFinancialTransactionsInputObjectZodSchema = makeSchema();
