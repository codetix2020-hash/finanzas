import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { IncomingWebhook } from "@slack/webhook";
import { Resend } from "resend";
import Stripe from "stripe";

export const testSlack = protectedProcedure
	.route({ method: "POST", path: "/test-slack" })
	.input(z.object({ webhookUrl: z.string().optional() }))
	.output(z.any())
	.handler(async ({ input }) => {
		try {
			const webhookUrl = input.webhookUrl || process.env.SLACK_WEBHOOK_URL;

			if (!webhookUrl) {
				return {
					success: false,
					message: "SLACK_WEBHOOK_URL no configurada en .env.local",
				};
			}

			const webhook = new IncomingWebhook(webhookUrl);

			await webhook.send({
				text: "🧪 Test de FinanzaDIOS",
				blocks: [
					{
						type: "header",
						text: {
							type: "plain_text",
							text: "🧪 Prueba de Integración Slack",
							emoji: true,
						},
					},
					{
						type: "section",
						text: {
							type: "mrkdwn",
							text: "¡Tu webhook de Slack está funcionando correctamente! FinanzaDIOS puede enviar notificaciones ahora. 🎉",
						},
					},
					{
						type: "context",
						elements: [
							{
								type: "mrkdwn",
								text: `Probado el ${new Date().toLocaleString("es-ES")}`,
							},
						],
					},
				],
			});

			return {
				success: true,
				message: "Webhook de Slack funcionando correctamente - Verifica tu canal",
			};
		} catch (error) {
			console.error("Error testing Slack:", error);
			return {
				success: false,
				message: error instanceof Error ? error.message : "Error desconocido",
			};
		}
	});

export const testResend = protectedProcedure
	.route({ method: "POST", path: "/test-resend" })
	.input(
		z.object({ apiKey: z.string().optional(), email: z.string().optional() }),
	)
	.output(z.any())
	.handler(async ({ input }) => {
		try {
			const apiKey = input.apiKey || process.env.RESEND_API_KEY;
			const email = input.email || process.env.FINANCE_ALERT_EMAIL;

			if (!apiKey) {
				return {
					success: false,
					message: "RESEND_API_KEY no configurada en .env.local",
				};
			}

			if (!email) {
				return {
					success: false,
					message: "FINANCE_ALERT_EMAIL no configurada en .env.local",
				};
			}

			const resend = new Resend(apiKey);

			const { data, error } = await resend.emails.send({
				from: "FinanzaDIOS <onboarding@resend.dev>",
				to: email,
				subject: "🧪 Test de FinanzaDIOS - Email Funcionando",
				html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
              <h1 style="margin: 0; font-size: 32px;">🎉</h1>
              <h2 style="margin: 10px 0 0 0; font-size: 24px;">¡Email Funcionando!</h2>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border-radius: 12px; border: 2px solid #e5e7eb;">
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                Tu integración de email con Resend está configurada correctamente.
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
                FinanzaDIOS ahora puede enviarte alertas automáticas sobre:
              </p>
              
              <ul style="margin: 0 0 20px 0; padding-left: 20px; color: #6b7280;">
                <li style="margin-bottom: 8px;">Cambios de presupuesto</li>
                <li style="margin-bottom: 8px;">Campañas escaladas/pausadas</li>
                <li style="margin-bottom: 8px;">Anomalías detectadas</li>
                <li style="margin-bottom: 8px;">Alertas críticas del Finance Agent</li>
              </ul>
              
              <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>✅ Todo listo!</strong> Las notificaciones por email están activas.
                </p>
              </div>
            </div>
            
            <div style="margin-top: 30px; text-align: center; color: #9ca3af; font-size: 14px;">
              <p style="margin: 0;">FinanzaDIOS by CodeTix</p>
              <p style="margin: 5px 0 0 0;">${new Date().toLocaleString("es-ES")}</p>
            </div>
          </div>
        `,
			});

			if (error) {
				return {
					success: false,
					message: error.message,
				};
			}

			return {
				success: true,
				message: `Email enviado correctamente a ${email} - Verifica tu bandeja`,
				data,
			};
		} catch (error) {
			console.error("Error testing Resend:", error);
			return {
				success: false,
				message: error instanceof Error ? error.message : "Error desconocido",
			};
		}
	});

export const testStripe = protectedProcedure
	.route({ method: "POST", path: "/test-stripe" })
	.input(z.object({ secretKey: z.string().optional() }))
	.output(z.any())
	.handler(async ({ input }) => {
		try {
			const secretKey = input.secretKey || process.env.STRIPE_SECRET_KEY;

			if (!secretKey) {
				return {
					success: false,
					message: "STRIPE_SECRET_KEY no configurada en .env.local",
				};
			}

			const stripe = new Stripe(secretKey, {
				apiVersion: "2024-11-20.acacia",
			});

			// Test: obtener balance de la cuenta
			const balance = await stripe.balance.retrieve();

			return {
				success: true,
				message: "Stripe conectado correctamente",
				data: {
					available: balance.available,
					pending: balance.pending,
					currency: balance.available[0]?.currency || "usd",
				},
			};
		} catch (error) {
			console.error("Error testing Stripe:", error);
			return {
				success: false,
				message: error instanceof Error ? error.message : "Error desconocido",
			};
		}
	});

