import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MemberUpdateManyWithoutOrganizationNestedInputObjectSchema as MemberUpdateManyWithoutOrganizationNestedInputObjectSchema } from './MemberUpdateManyWithoutOrganizationNestedInput.schema';
import { InvitationUpdateManyWithoutOrganizationNestedInputObjectSchema as InvitationUpdateManyWithoutOrganizationNestedInputObjectSchema } from './InvitationUpdateManyWithoutOrganizationNestedInput.schema';
import { PurchaseUpdateManyWithoutOrganizationNestedInputObjectSchema as PurchaseUpdateManyWithoutOrganizationNestedInputObjectSchema } from './PurchaseUpdateManyWithoutOrganizationNestedInput.schema';
import { AiChatUpdateManyWithoutOrganizationNestedInputObjectSchema as AiChatUpdateManyWithoutOrganizationNestedInputObjectSchema } from './AiChatUpdateManyWithoutOrganizationNestedInput.schema';
import { SaasMetricsUpdateManyWithoutOrganizationNestedInputObjectSchema as SaasMetricsUpdateManyWithoutOrganizationNestedInputObjectSchema } from './SaasMetricsUpdateManyWithoutOrganizationNestedInput.schema';
import { CostTrackingUpdateManyWithoutOrganizationNestedInputObjectSchema as CostTrackingUpdateManyWithoutOrganizationNestedInputObjectSchema } from './CostTrackingUpdateManyWithoutOrganizationNestedInput.schema';
import { AgentDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema as AgentDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema } from './AgentDecisionUpdateManyWithoutOrganizationNestedInput.schema';
import { SaasProductUpdateManyWithoutOrganizationNestedInputObjectSchema as SaasProductUpdateManyWithoutOrganizationNestedInputObjectSchema } from './SaasProductUpdateManyWithoutOrganizationNestedInput.schema';
import { MarketingAdCampaignUpdateManyWithoutOrganizationNestedInputObjectSchema as MarketingAdCampaignUpdateManyWithoutOrganizationNestedInputObjectSchema } from './MarketingAdCampaignUpdateManyWithoutOrganizationNestedInput.schema';
import { MarketingContentUpdateManyWithoutOrganizationNestedInputObjectSchema as MarketingContentUpdateManyWithoutOrganizationNestedInputObjectSchema } from './MarketingContentUpdateManyWithoutOrganizationNestedInput.schema';
import { MarketingDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema as MarketingDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema } from './MarketingDecisionUpdateManyWithoutOrganizationNestedInput.schema';
import { MarketingGuardUpdateManyWithoutOrganizationNestedInputObjectSchema as MarketingGuardUpdateManyWithoutOrganizationNestedInputObjectSchema } from './MarketingGuardUpdateManyWithoutOrganizationNestedInput.schema';
import { MarketingLeadUpdateManyWithoutOrganizationNestedInputObjectSchema as MarketingLeadUpdateManyWithoutOrganizationNestedInputObjectSchema } from './MarketingLeadUpdateManyWithoutOrganizationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  logo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  paymentsCustomerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  members: z.lazy(() => MemberUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  purchases: z.lazy(() => PurchaseUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  aiChats: z.lazy(() => AiChatUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  saasMetrics: z.lazy(() => SaasMetricsUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  costTrackings: z.lazy(() => CostTrackingUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  agentDecisions: z.lazy(() => AgentDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  saasProducts: z.lazy(() => SaasProductUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  marketingAdCampaigns: z.lazy(() => MarketingAdCampaignUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  marketingContent: z.lazy(() => MarketingContentUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  marketingDecisions: z.lazy(() => MarketingDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  marketingGuards: z.lazy(() => MarketingGuardUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  marketingLeads: z.lazy(() => MarketingLeadUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateWithoutFinancialTransactionsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithoutFinancialTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithoutFinancialTransactionsInput>;
export const OrganizationUpdateWithoutFinancialTransactionsInputObjectZodSchema = makeSchema();
