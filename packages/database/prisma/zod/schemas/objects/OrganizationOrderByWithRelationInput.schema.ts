import * as z from 'zod';
import type { Prisma } from '../../../generated/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MemberOrderByRelationAggregateInputObjectSchema as MemberOrderByRelationAggregateInputObjectSchema } from './MemberOrderByRelationAggregateInput.schema';
import { InvitationOrderByRelationAggregateInputObjectSchema as InvitationOrderByRelationAggregateInputObjectSchema } from './InvitationOrderByRelationAggregateInput.schema';
import { PurchaseOrderByRelationAggregateInputObjectSchema as PurchaseOrderByRelationAggregateInputObjectSchema } from './PurchaseOrderByRelationAggregateInput.schema';
import { AiChatOrderByRelationAggregateInputObjectSchema as AiChatOrderByRelationAggregateInputObjectSchema } from './AiChatOrderByRelationAggregateInput.schema';
import { FinancialTransactionOrderByRelationAggregateInputObjectSchema as FinancialTransactionOrderByRelationAggregateInputObjectSchema } from './FinancialTransactionOrderByRelationAggregateInput.schema';
import { SaasMetricsOrderByRelationAggregateInputObjectSchema as SaasMetricsOrderByRelationAggregateInputObjectSchema } from './SaasMetricsOrderByRelationAggregateInput.schema';
import { CostTrackingOrderByRelationAggregateInputObjectSchema as CostTrackingOrderByRelationAggregateInputObjectSchema } from './CostTrackingOrderByRelationAggregateInput.schema';
import { AgentDecisionOrderByRelationAggregateInputObjectSchema as AgentDecisionOrderByRelationAggregateInputObjectSchema } from './AgentDecisionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  paymentsCustomerId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  members: z.lazy(() => MemberOrderByRelationAggregateInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationOrderByRelationAggregateInputObjectSchema).optional(),
  purchases: z.lazy(() => PurchaseOrderByRelationAggregateInputObjectSchema).optional(),
  aiChats: z.lazy(() => AiChatOrderByRelationAggregateInputObjectSchema).optional(),
  financialTransactions: z.lazy(() => FinancialTransactionOrderByRelationAggregateInputObjectSchema).optional(),
  saasMetrics: z.lazy(() => SaasMetricsOrderByRelationAggregateInputObjectSchema).optional(),
  costTrackings: z.lazy(() => CostTrackingOrderByRelationAggregateInputObjectSchema).optional(),
  agentDecisions: z.lazy(() => AgentDecisionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OrganizationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrganizationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationOrderByWithRelationInput>;
export const OrganizationOrderByWithRelationInputObjectZodSchema = makeSchema();
