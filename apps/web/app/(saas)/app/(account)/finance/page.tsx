import { Suspense } from "react";
import { TrendingUp, DollarSign, PiggyBank, Target } from "lucide-react";
import { MetricCard } from "@saas/finance/components/metric-card";
import { OrganizationsTable } from "@saas/finance/components/organizations-table";
import { PageHeader } from "@saas/shared/components/PageHeader";
import { Skeleton } from "@ui/components/skeleton";
import { orpcClient } from "@shared/lib/orpc-client";

async function FinanceOverview() {
	// TODO: Implementar módulo finance en packages/api/modules/finance
	// const data = await orpcClient.finance.getOverview();
	const data = {
		totalMRR: 0,
		totalRevenue: 0,
		netProfit: 0,
		avgROI: 0,
		organizations: [],
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("es-ES", {
			style: "currency",
			currency: "EUR",
		}).format(amount);
	};

	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<MetricCard
					title="MRR Total"
					value={formatCurrency(data.totalMRR)}
					icon={<TrendingUp className="h-4 w-4" />}
				/>
				<MetricCard
					title="Revenue (30d)"
					value={formatCurrency(data.totalRevenue)}
					icon={<DollarSign className="h-4 w-4" />}
				/>
				<MetricCard
					title="Profit Neto"
					value={formatCurrency(data.netProfit)}
					icon={<PiggyBank className="h-4 w-4" />}
					trend={data.netProfit > 0 ? "up" : "down"}
				/>
				<MetricCard
					title="ROI Promedio"
					value={`${data.avgROI.toFixed(1)}%`}
					icon={<Target className="h-4 w-4" />}
					trend={data.avgROI > 0 ? "up" : "down"}
				/>
			</div>

			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">SaaS Portfolio</h2>
				<OrganizationsTable organizations={data.organizations} />
			</div>
		</>
	);
}

function LoadingSkeleton() {
	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{[...Array(4)].map((_, i) => (
					<Skeleton key={i} className="h-32" />
				))}
			</div>
			<div className="mt-8">
				<Skeleton className="h-96" />
			</div>
		</>
	);
}

export default function FinancePage() {
	return (
		<>
			<PageHeader
				title="FinanceOS Dashboard"
				subtitle="Métricas financieras y ROI de tu portfolio de SaaS"
			/>

			<Suspense fallback={<LoadingSkeleton />}>
				<FinanceOverview />
			</Suspense>
		</>
	);
}

