"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ui/components/table";
import { Badge } from "@ui/components/badge";
import { Button } from "@ui/components/button";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Organization {
	id: string;
	name: string;
	mrr: number;
	revenue: number;
	costs: number;
	profit: number;
	roi: number;
	status: "ACTIVE" | "PAUSED" | "OPTIMIZING" | "KILLED";
}

interface OrganizationsTableProps {
	organizations: Organization[];
}

export function OrganizationsTable({
	organizations,
}: OrganizationsTableProps) {
	const [sortBy, setSortBy] = useState<"roi" | "profit" | "mrr">("roi");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

	const sortedOrgs = [...organizations].sort((a, b) => {
		const aVal = a[sortBy];
		const bVal = b[sortBy];
		return sortOrder === "desc" ? bVal - aVal : aVal - bVal;
	});

	const toggleSort = (field: typeof sortBy) => {
		if (sortBy === field) {
			setSortOrder(sortOrder === "desc" ? "asc" : "desc");
		} else {
			setSortBy(field);
			setSortOrder("desc");
		}
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("es-ES", {
			style: "currency",
			currency: "EUR",
		}).format(amount);
	};

	const getStatusColor = (status: Organization["status"]) => {
		switch (status) {
			case "ACTIVE":
				return "success";
			case "PAUSED":
				return "warning";
			case "OPTIMIZING":
				return "info";
			case "KILLED":
				return "error";
		}
	};

	const getROIColor = (roi: number) => {
		if (roi > 100) return "text-green-600 dark:text-green-400";
		if (roi > 20) return "text-blue-600 dark:text-blue-400";
		if (roi > 0) return "text-yellow-600 dark:text-yellow-400";
		return "text-red-600 dark:text-red-400";
	};

	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>SaaS</TableHead>
						<TableHead>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => toggleSort("mrr")}
							>
								MRR
								<ArrowUpDown className="ml-2 h-4 w-4" />
							</Button>
						</TableHead>
						<TableHead>Revenue (30d)</TableHead>
						<TableHead>Costs (30d)</TableHead>
						<TableHead>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => toggleSort("profit")}
							>
								Profit
								<ArrowUpDown className="ml-2 h-4 w-4" />
							</Button>
						</TableHead>
						<TableHead>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => toggleSort("roi")}
							>
								ROI
								<ArrowUpDown className="ml-2 h-4 w-4" />
							</Button>
						</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sortedOrgs.map((org) => (
						<TableRow key={org.id}>
							<TableCell className="font-medium">{org.name}</TableCell>
							<TableCell>{formatCurrency(org.mrr)}</TableCell>
							<TableCell>{formatCurrency(org.revenue)}</TableCell>
							<TableCell>{formatCurrency(org.costs)}</TableCell>
							<TableCell className="font-semibold">
								{formatCurrency(org.profit)}
							</TableCell>
							<TableCell className={getROIColor(org.roi)}>
								{org.roi.toFixed(1)}%
							</TableCell>
							<TableCell>
								<Badge status={getStatusColor(org.status) as "success" | "info" | "warning" | "error"}>
									{org.status}
								</Badge>
							</TableCell>
							<TableCell className="text-right">
								<Link href={`/app/finance/${org.id}`}>
									<Button variant="ghost" size="sm">
										Ver detalles
									</Button>
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

