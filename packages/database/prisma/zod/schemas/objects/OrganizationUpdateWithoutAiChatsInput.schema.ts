import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MemberUpdateManyWithoutOrganizationNestedInputObjectSchema as MemberUpdateManyWithoutOrganizationNestedInputObjectSchema } from './MemberUpdateManyWithoutOrganizationNestedInput.schema';
import { InvitationUpdateManyWithoutOrganizationNestedInputObjectSchema as InvitationUpdateManyWithoutOrganizationNestedInputObjectSchema } from './InvitationUpdateManyWithoutOrganizationNestedInput.schema';
import { PurchaseUpdateManyWithoutOrganizationNestedInputObjectSchema as PurchaseUpdateManyWithoutOrganizationNestedInputObjectSchema } from './PurchaseUpdateManyWithoutOrganizationNestedInput.schema';
import { FinancialTransactionUpdateManyWithoutOrganizationNestedInputObjectSchema as FinancialTransactionUpdateManyWithoutOrganizationNestedInputObjectSchema } from './FinancialTransactionUpdateManyWithoutOrganizationNestedInput.schema';
import { SaasMetricsUpdateManyWithoutOrganizationNestedInputObjectSchema as SaasMetricsUpdateManyWithoutOrganizationNestedInputObjectSchema } from './SaasMetricsUpdateManyWithoutOrganizationNestedInput.schema';
import { CostTrackingUpdateManyWithoutOrganizationNestedInputObjectSchema as CostTrackingUpdateManyWithoutOrganizationNestedInputObjectSchema } from './CostTrackingUpdateManyWithoutOrganizationNestedInput.schema';
import { AgentDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema as AgentDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema } from './AgentDecisionUpdateManyWithoutOrganizationNestedInput.schema'

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
  financialTransactions: z.lazy(() => FinancialTransactionUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  saasMetrics: z.lazy(() => SaasMetricsUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  costTrackings: z.lazy(() => CostTrackingUpdateManyWithoutOrganizationNestedInputObjectSchema).optional(),
  agentDecisions: z.lazy(() => AgentDecisionUpdateManyWithoutOrganizationNestedInputObjectSchema).optional()
}).strict();
export const OrganizationUpdateWithoutAiChatsInputObjectSchema: z.ZodType<Prisma.OrganizationUpdateWithoutAiChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationUpdateWithoutAiChatsInput>;
export const OrganizationUpdateWithoutAiChatsInputObjectZodSchema = makeSchema();
