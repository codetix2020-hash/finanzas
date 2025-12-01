import { db } from "@repo/database";
import { protectedProcedure } from "../../../orpc/procedures";

export const getOverview = protectedProcedure
	.route({
		method: "GET",
		path: "/finance/overview",
		tags: ["Finance"],
		summary: "Get financial overview",
		description: "Returns financial metrics and organization performance data",
	})
	.handler(async () => {
		// Get all organizations with their financial data from the last 30 days
		const thirtyDaysAgo = new Date();
		thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

		const organizations = await db.organization.findMany({
			include: {
				financialTransactions: {
					where: {
						createdAt: {
							gte: thirtyDaysAgo,
						},
					},
				},
			},
		});

		const organizationsData = organizations.map((org) => {
			const transactions = org.financialTransactions;
			
		const revenue = transactions
			.filter((t) => t.type === "REVENUE")
			.reduce((sum, t) => sum + Number(t.amount), 0);

		const costs = transactions
			.filter((t) => t.type.startsWith("COST_"))
			.reduce((sum, t) => sum + Number(t.amount), 0);

			const profit = revenue - costs;
			const roi = costs > 0 ? ((profit / costs) * 100) : 0;

		// Get MRR (recurring revenue) - for now, all REVENUE is considered MRR
		// TODO: Add subscription tracking to distinguish one-time vs recurring
		const mrr = transactions
			.filter((t) => t.type === "REVENUE")
			.reduce((sum, t) => sum + Number(t.amount), 0);

			return {
				id: org.id,
				name: org.name,
				mrr,
				revenue,
				costs,
				profit,
				roi,
				status: org.status || "ACTIVE",
			};
		});

		// Calculate totals
		const totalMRR = organizationsData.reduce((sum, org) => sum + org.mrr, 0);
		const totalRevenue = organizationsData.reduce((sum, org) => sum + org.revenue, 0);
		const totalCosts = organizationsData.reduce((sum, org) => sum + org.costs, 0);
		const netProfit = totalRevenue - totalCosts;
		const avgROI = organizationsData.length > 0
			? organizationsData.reduce((sum, org) => sum + org.roi, 0) / organizationsData.length
			: 0;

		return {
			totalMRR,
			totalRevenue,
			totalCosts,
			netProfit,
			avgROI,
			organizations: organizationsData,
		};
	});

