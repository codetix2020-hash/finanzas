import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { MemberFindManySchema as MemberFindManySchema } from '../findManyMember.schema';
import { InvitationFindManySchema as InvitationFindManySchema } from '../findManyInvitation.schema';
import { PurchaseFindManySchema as PurchaseFindManySchema } from '../findManyPurchase.schema';
import { AiChatFindManySchema as AiChatFindManySchema } from '../findManyAiChat.schema';
import { FinancialTransactionFindManySchema as FinancialTransactionFindManySchema } from '../findManyFinancialTransaction.schema';
import { SaasMetricsFindManySchema as SaasMetricsFindManySchema } from '../findManySaasMetrics.schema';
import { CostTrackingFindManySchema as CostTrackingFindManySchema } from '../findManyCostTracking.schema';
import { AgentDecisionFindManySchema as AgentDecisionFindManySchema } from '../findManyAgentDecision.schema';
import { SaasProductFindManySchema as SaasProductFindManySchema } from '../findManySaasProduct.schema';
import { MarketingAdCampaignFindManySchema as MarketingAdCampaignFindManySchema } from '../findManyMarketingAdCampaign.schema';
import { MarketingContentFindManySchema as MarketingContentFindManySchema } from '../findManyMarketingContent.schema';
import { MarketingDecisionFindManySchema as MarketingDecisionFindManySchema } from '../findManyMarketingDecision.schema';
import { MarketingGuardFindManySchema as MarketingGuardFindManySchema } from '../findManyMarketingGuard.schema';
import { MarketingLeadFindManySchema as MarketingLeadFindManySchema } from '../findManyMarketingLead.schema';
import { OrganizationCountOutputTypeArgsObjectSchema as OrganizationCountOutputTypeArgsObjectSchema } from './OrganizationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  logo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  metadata: z.boolean().optional(),
  paymentsCustomerId: z.boolean().optional(),
  members: z.union([z.boolean(), z.lazy(() => MemberFindManySchema)]).optional(),
  invitations: z.union([z.boolean(), z.lazy(() => InvitationFindManySchema)]).optional(),
  purchases: z.union([z.boolean(), z.lazy(() => PurchaseFindManySchema)]).optional(),
  aiChats: z.union([z.boolean(), z.lazy(() => AiChatFindManySchema)]).optional(),
  financialTransactions: z.union([z.boolean(), z.lazy(() => FinancialTransactionFindManySchema)]).optional(),
  saasMetrics: z.union([z.boolean(), z.lazy(() => SaasMetricsFindManySchema)]).optional(),
  costTrackings: z.union([z.boolean(), z.lazy(() => CostTrackingFindManySchema)]).optional(),
  agentDecisions: z.union([z.boolean(), z.lazy(() => AgentDecisionFindManySchema)]).optional(),
  saasProducts: z.union([z.boolean(), z.lazy(() => SaasProductFindManySchema)]).optional(),
  marketingAdCampaigns: z.union([z.boolean(), z.lazy(() => MarketingAdCampaignFindManySchema)]).optional(),
  marketingContent: z.union([z.boolean(), z.lazy(() => MarketingContentFindManySchema)]).optional(),
  marketingDecisions: z.union([z.boolean(), z.lazy(() => MarketingDecisionFindManySchema)]).optional(),
  marketingGuards: z.union([z.boolean(), z.lazy(() => MarketingGuardFindManySchema)]).optional(),
  marketingLeads: z.union([z.boolean(), z.lazy(() => MarketingLeadFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrganizationSelectObjectSchema: z.ZodType<Prisma.OrganizationSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationSelect>;
export const OrganizationSelectObjectZodSchema = makeSchema();
