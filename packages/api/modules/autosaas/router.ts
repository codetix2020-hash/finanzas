import { orpc } from "@kit/orpc/server"
import { webhookProcedure, sendFeatureRequestProcedure, processInboxProcedure } from './procedures/webhook'

export const autosaasRouter = orpc.router({
  webhook: webhookProcedure,
  sendFeatureRequest: sendFeatureRequestProcedure,
  processInbox: processInboxProcedure
})

export default autosaasRouter

