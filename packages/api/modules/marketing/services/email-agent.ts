import { Resend } from 'resend';
import Anthropic from "@anthropic-ai/sdk";

export interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  segment: string;
  scheduledFor?: Date;
  status: 'draft' | 'scheduled' | 'sent';
  stats?: {
    sent: number;
    opened: number;
    clicked: number;
    converted: number;
  };
}

export class EmailAgent {
  private resend: Resend;
  private anthropic: Anthropic;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY || "");
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY || "",
    });
  }

  /**
   * Crear campaña de email
   */
  async createCampaign(params: {
    name: string;
    segment: string;
    goal: string;
  }): Promise<EmailCampaign> {
    // Generar contenido con IA
    const { subject, content } = await this.generateEmailContent({
      segment: params.segment,
      goal: params.goal,
    });

    const campaign: EmailCampaign = {
      id: `camp_${Date.now()}`,
      name: params.name,
      subject,
      content,
      segment: params.segment,
      status: 'draft',
    };

    return campaign;
  }

  /**
   * Generar contenido de email con IA
   */
  async generateEmailContent(params: {
    segment: string;
    goal: string;
    tone?: string;
  }): Promise<{ subject: string; content: string }> {
    const prompt = `Genera un email marketing para:

SEGMENTO: ${params.segment}
OBJETIVO: ${params.goal}
TONO: ${params.tone || 'profesional y amigable'}

Genera:

1. Subject line atractivo (max 60 caracteres)

2. Contenido del email en HTML

Responde en JSON:

{
  "subject": "string",
  "content": "string (HTML)"
}`;

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      });

      const responseContent = message.content[0];
      if (responseContent.type !== "text") {
        throw new Error("Unexpected response type");
      }

      const jsonMatch = responseContent.text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found");
      }

      return JSON.parse(jsonMatch[0]);
    } catch (error) {
      console.error("Error generating email content:", error);
      return {
        subject: `¡Descubre ${params.goal}!`,
        content: `<h1>Hola!</h1><p>Contenido sobre ${params.goal}</p>`,
      };
    }
  }

  /**
   * Enviar campaña
   */
  async sendCampaign(campaign: EmailCampaign, recipients: string[]): Promise<{
    sent: number;
    failed: number;
  }> {
    let sent = 0;
    let failed = 0;

    for (const email of recipients) {
      try {
        await this.resend.emails.send({
          from: 'MarketingOS <onboarding@resend.dev>',
          to: email,
          subject: campaign.subject,
          html: campaign.content,
        });
        sent++;
      } catch (error) {
        console.error(`Failed to send to ${email}:`, error);
        failed++;
      }
    }

    return { sent, failed };
  }

  /**
   * Segmentar audiencia
   */
  async segmentAudience(leads: Array<{ email: string; tags: string[]; score: number }>): Promise<{
    hot: string[];
    warm: string[];
    cold: string[];
  }> {
    const hot: string[] = [];
    const warm: string[] = [];
    const cold: string[] = [];

    leads.forEach(lead => {
      if (lead.score >= 80) {
        hot.push(lead.email);
      } else if (lead.score >= 50) {
        warm.push(lead.email);
      } else {
        cold.push(lead.email);
      }
    });

    return { hot, warm, cold };
  }

  /**
   * A/B Testing de emails
   */
  async runABTest(params: {
    variantA: { subject: string; content: string };
    variantB: { subject: string; content: string };
    recipients: string[];
  }): Promise<{
    winner: 'A' | 'B';
    stats: {
      A: { sent: number; opened: number; clicked: number };
      B: { sent: number; opened: number; clicked: number };
    };
  }> {
    // En producción, enviarías realmente los emails y trackearías
    // Por ahora, simulamos
    const statsA = {
      sent: Math.floor(params.recipients.length / 2),
      opened: Math.floor(params.recipients.length / 2 * 0.25),
      clicked: Math.floor(params.recipients.length / 2 * 0.05),
    };

    const statsB = {
      sent: Math.floor(params.recipients.length / 2),
      opened: Math.floor(params.recipients.length / 2 * 0.30),
      clicked: Math.floor(params.recipients.length / 2 * 0.07),
    };

    const winner = statsB.clicked > statsA.clicked ? 'B' : 'A';

    return {
      winner,
      stats: { A: statsA, B: statsB },
    };
  }
}

