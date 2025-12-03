import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { MemberCreateNestedManyWithoutOrganizationInputObjectSchema as MemberCreateNestedManyWithoutOrganizationInputObjectSchema } from './MemberCreateNestedManyWithoutOrganizationInput.schema';
import { InvitationCreateNestedManyWithoutOrganizationInputObjectSchema as InvitationCreateNestedManyWithoutOrganizationInputObjectSchema } from './InvitationCreateNestedManyWithoutOrganizationInput.schema';
import { PurchaseCreateNestedManyWithoutOrganizationInputObjectSchema as PurchaseCreateNestedManyWithoutOrganizationInputObjectSchema } from './PurchaseCreateNestedManyWithoutOrganizationInput.schema';
import { AiChatCreateNestedManyWithoutOrganizationInputObjectSchema as AiChatCreateNestedManyWithoutOrganizationInputObjectSchema } from './AiChatCreateNestedManyWithoutOrganizationInput.schema';
import { FinancialTransactionCreateNestedManyWithoutOrganizationInputObjectSchema as FinancialTransactionCreateNestedManyWithoutOrganizationInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutOrganizationInput.schema';
import { SaasMetricsCreateNestedManyWithoutOrganizationInputObjectSchema as SaasMetricsCreateNestedManyWithoutOrganizationInputObjectSchema } from './SaasMetricsCreateNestedManyWithoutOrganizationInput.schema';
import { AgentDecisionCreateNestedManyWithoutOrganizationInputObjectSchema as AgentDecisionCreateNestedManyWithoutOrganizationInputObjectSchema } from './AgentDecisionCreateNestedManyWithoutOrganizationInput.schema';
import { SaasProductCreateNestedManyWithoutOrganizationInputObjectSchema as SaasProductCreateNestedManyWithoutOrganizationInputObjectSchema } from './SaasProductCreateNestedManyWithoutOrganizationInput.schema';
import { MarketingAdCampaignCreateNestedManyWithoutOrganizationInputObjectSchema as MarketingAdCampaignCreateNestedManyWithoutOrganizationInputObjectSchema } from './MarketingAdCampaignCreateNestedManyWithoutOrganizationInput.schema';
import { MarketingContentCreateNestedManyWithoutOrganizationInputObjectSchema as MarketingContentCreateNestedManyWithoutOrganizationInputObjectSchema } from './MarketingContentCreateNestedManyWithoutOrganizationInput.schema';
import { MarketingDecisionCreateNestedManyWithoutOrganizationInputObjectSchema as MarketingDecisionCreateNestedManyWithoutOrganizationInputObjectSchema } from './MarketingDecisionCreateNestedManyWithoutOrganizationInput.schema';
import { MarketingGuardCreateNestedManyWithoutOrganizationInputObjectSchema as MarketingGuardCreateNestedManyWithoutOrganizationInputObjectSchema } from './MarketingGuardCreateNestedManyWithoutOrganizationInput.schema';
import { MarketingLeadCreateNestedManyWithoutOrganizationInputObjectSchema as MarketingLeadCreateNestedManyWithoutOrganizationInputObjectSchema } from './MarketingLeadCreateNestedManyWithoutOrganizationInput.schema'

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
  financialTransactions: z.lazy(() => FinancialTransactionCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  saasMetrics: z.lazy(() => SaasMetricsCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  agentDecisions: z.lazy(() => AgentDecisionCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  saasProducts: z.lazy(() => SaasProductCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  marketingAdCampaigns: z.lazy(() => MarketingAdCampaignCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  marketingContent: z.lazy(() => MarketingContentCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  marketingDecisions: z.lazy(() => MarketingDecisionCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  marketingGuards: z.lazy(() => MarketingGuardCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  marketingLeads: z.lazy(() => MarketingLeadCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationCreateWithoutCostTrackingsInputObjectSchema: z.ZodType<Prisma.OrganizationCreateWithoutCostTrackingsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCreateWithoutCostTrackingsInput>;
export const OrganizationCreateWithoutCostTrackingsInputObjectZodSchema = makeSchema();
