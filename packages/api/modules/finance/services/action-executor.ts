import { db } from "@repo/database";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export class ActionExecutor {
  async executeAction(actionId: string) {
    const action = await db.financeAction.findUnique({
      where: { id: actionId },
    });
    
    if (!action || action.status !== "pending") {
      throw new Error("Action not found or already executed");
    }
    
    try {
      let result;
      
      switch (action.type) {
        case "alert":
          result = await this.sendAlert(action);
          break;
        case "email":
          result = await this.sendEmail(action);
          break;
        case "slack":
          result = await this.sendSlack(action);
          break;
        default:
          throw new Error(`Unknown action type: ${action.type}`);
      }
      
      await db.financeAction.update({
        where: { id: actionId },
        data: {
          status: "executed",
          result,
          executedAt: new Date(),
        },
      });
      
      return result;
    } catch (error) {
      await db.financeAction.update({
        where: { id: actionId },
        data: {
          status: "failed",
          error: error instanceof Error ? error.message : "Unknown error",
        },
      });
      
      throw error;
    }
  }
  
  private async sendAlert(action: any) {
    // Simular envío de alerta (implementar con servicio real)
    console.log(`Alert: ${action.title} - ${action.description}`);
    return { sent: true, method: "console" };
  }
  
  private async sendEmail(action: any) {
    // Implementar con Resend u otro servicio
    console.log(`Email: ${action.title}`);
    return { sent: true, method: "email" };
  }
  
  private async sendSlack(action: any) {
    // Implementar con Slack Webhook
    console.log(`Slack: ${action.title}`);
    return { sent: true, method: "slack" };
  }
}
