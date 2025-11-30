import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MemberUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as MemberUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './MemberUncheckedUpdateManyWithoutOrganizationNestedInput.schema';
import { InvitationUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as InvitationUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutOrganizationNestedInput.schema';
import { PurchaseUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as PurchaseUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './PurchaseUncheckedUpdateManyWithoutOrganizationNestedInput.schema';
import { AiChatUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as AiChatUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './AiChatUncheckedUpdateManyWithoutOrganizationNestedInput.schema';
import { FinancialTransactionUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as FinancialTransactionUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './FinancialTransactionUncheckedUpdateManyWithoutOrganizationNestedInput.schema';
import { SaasMetricsUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as SaasMetricsUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './SaasMetricsUncheckedUpdateManyWithoutOrganizationNestedInput.schema';
import { AgentDecisionUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema as AgentDecisionUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema } from './AgentDecisionUncheckedUpdateManyWithoutOrganizationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  logo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  paymentsCustomerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  purchases: z.lazy(() => PurchaseUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  aiChats: z.lazy(() => AiChatUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  financialTransactions: z.lazy(() => FinancialTransactionUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  saasMetrics: z.lazy(() => SaasMetricsUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  agentDecisions: z.lazy(() => AgentDecisionUncheckedUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutCostTrackingsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutCostTrackingsInput>;
export const OrganizationUncheckedUpdateWithoutCostTrackingsInputObjectZodSchema = makeSchema();
