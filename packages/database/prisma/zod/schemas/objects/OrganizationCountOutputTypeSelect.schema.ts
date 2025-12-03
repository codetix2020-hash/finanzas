import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { OrganizationCountOutputTypeCountMembersArgsObjectSchema as OrganizationCountOutputTypeCountMembersArgsObjectSchema } from './OrganizationCountOutputTypeCountMembersArgs.schema';
import { OrganizationCountOutputTypeCountInvitationsArgsObjectSchema as OrganizationCountOutputTypeCountInvitationsArgsObjectSchema } from './OrganizationCountOutputTypeCountInvitationsArgs.schema';
import { OrganizationCountOutputTypeCountPurchasesArgsObjectSchema as OrganizationCountOutputTypeCountPurchasesArgsObjectSchema } from './OrganizationCountOutputTypeCountPurchasesArgs.schema';
import { OrganizationCountOutputTypeCountAiChatsArgsObjectSchema as OrganizationCountOutputTypeCountAiChatsArgsObjectSchema } from './OrganizationCountOutputTypeCountAiChatsArgs.schema';
import { OrganizationCountOutputTypeCountFinancialTransactionsArgsObjectSchema as OrganizationCountOutputTypeCountFinancialTransactionsArgsObjectSchema } from './OrganizationCountOutputTypeCountFinancialTransactionsArgs.schema';
import { OrganizationCountOutputTypeCountSaasMetricsArgsObjectSchema as OrganizationCountOutputTypeCountSaasMetricsArgsObjectSchema } from './OrganizationCountOutputTypeCountSaasMetricsArgs.schema';
import { OrganizationCountOutputTypeCountCostTrackingsArgsObjectSchema as OrganizationCountOutputTypeCountCostTrackingsArgsObjectSchema } from './OrganizationCountOutputTypeCountCostTrackingsArgs.schema';
import { OrganizationCountOutputTypeCountAgentDecisionsArgsObjectSchema as OrganizationCountOutputTypeCountAgentDecisionsArgsObjectSchema } from './OrganizationCountOutputTypeCountAgentDecisionsArgs.schema';
import { OrganizationCountOutputTypeCountSaasProductsArgsObjectSchema as OrganizationCountOutputTypeCountSaasProductsArgsObjectSchema } from './OrganizationCountOutputTypeCountSaasProductsArgs.schema';
import { OrganizationCountOutputTypeCountMarketingAdCampaignsArgsObjectSchema as OrganizationCountOutputTypeCountMarketingAdCampaignsArgsObjectSchema } from './OrganizationCountOutputTypeCountMarketingAdCampaignsArgs.schema';
import { OrganizationCountOutputTypeCountMarketingContentArgsObjectSchema as OrganizationCountOutputTypeCountMarketingContentArgsObjectSchema } from './OrganizationCountOutputTypeCountMarketingContentArgs.schema';
import { OrganizationCountOutputTypeCountMarketingDecisionsArgsObjectSchema as OrganizationCountOutputTypeCountMarketingDecisionsArgsObjectSchema } from './OrganizationCountOutputTypeCountMarketingDecisionsArgs.schema';
import { OrganizationCountOutputTypeCountMarketingGuardsArgsObjectSchema as OrganizationCountOutputTypeCountMarketingGuardsArgsObjectSchema } from './OrganizationCountOutputTypeCountMarketingGuardsArgs.schema';
import { OrganizationCountOutputTypeCountMarketingLeadsArgsObjectSchema as OrganizationCountOutputTypeCountMarketingLeadsArgsObjectSchema } from './OrganizationCountOutputTypeCountMarketingLeadsArgs.schema'

const makeSchema = () => z.object({
  members: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountMembersArgsObjectSchema)]).optional(),
  invitations: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountInvitationsArgsObjectSchema)]).optional(),
  purchases: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountPurchasesArgsObjectSchema)]).optional(),
  aiChats: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountAiChatsArgsObjectSchema)]).optional(),
  financialTransactions: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountFinancialTransactionsArgsObjectSchema)]).optional(),
  saasMetrics: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountSaasMetricsArgsObjectSchema)]).optional(),
  costTrackings: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountCostTrackingsArgsObjectSchema)]).optional(),
  agentDecisions: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountAgentDecisionsArgsObjectSchema)]).optional(),
  saasProducts: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountSaasProductsArgsObjectSchema)]).optional(),
  marketingAdCampaigns: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountMarketingAdCampaignsArgsObjectSchema)]).optional(),
  marketingContent: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountMarketingContentArgsObjectSchema)]).optional(),
  marketingDecisions: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountMarketingDecisionsArgsObjectSchema)]).optional(),
  marketingGuards: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountMarketingGuardsArgsObjectSchema)]).optional(),
  marketingLeads: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeCountMarketingLeadsArgsObjectSchema)]).optional()
}).strict();
export const OrganizationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrganizationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationCountOutputTypeSelect>;
export const OrganizationCountOutputTypeSelectObjectZodSchema = makeSchema();
