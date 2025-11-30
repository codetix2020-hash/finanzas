import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { InvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as InvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { PurchaseUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as PurchaseUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './PurchaseUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { AiChatUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as AiChatUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './AiChatUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { FinancialTransactionUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as FinancialTransactionUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './FinancialTransactionUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { SaasMetricsUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as SaasMetricsUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './SaasMetricsUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { CostTrackingUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as CostTrackingUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './CostTrackingUncheckedCreateNestedManyWithoutOrganizationInput.schema';
import { AgentDecisionUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema as AgentDecisionUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema } from './AgentDecisionUncheckedCreateNestedManyWithoutOrganizationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  metadata: z.string().optional().nullable(),
  paymentsCustomerId: z.string().optional().nullable(),
  invitations: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  purchases: z.lazy(() => PurchaseUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  aiChats: z.lazy(() => AiChatUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  financialTransactions: z.lazy(() => FinancialTransactionUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  saasMetrics: z.lazy(() => SaasMetricsUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  costTrackings: z.lazy(() => CostTrackingUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional(),
  agentDecisions: z.lazy(() => AgentDecisionUncheckedCreateNestedManyWithoutOrganizationInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedCreateWithoutMembersInput>;
export const OrganizationUncheckedCreateWithoutMembersInputObjectZodSchema = makeSchema();
