import { Card, CardContent, CardHeader, CardTitle } from "@ui/components/card";
import { Badge } from "@ui/components/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@ui/lib";

interface MetricCardProps {
	title: string;
	value: string;
	change?: number;
	trend?: "up" | "down";
	icon: React.ReactNode;
	className?: string;
}

export function MetricCard({
	title,
	value,
	change,
	trend,
	icon,
	className,
}: MetricCardProps) {
	return (
		<Card className={cn("relative overflow-hidden", className)}>
			<CardHeader className="flex flex-row items-center justify-between pb-2">
				<CardTitle className="text-sm font-medium text-muted-foreground">
					{title}
				</CardTitle>
				<div className="text-muted-foreground">{icon}</div>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				{change !== undefined && (
					<div className="flex items-center gap-1 text-xs mt-1">
						{trend === "up" ? (
							<TrendingUp className="h-3 w-3 text-green-500" />
						) : (
							<TrendingDown className="h-3 w-3 text-red-500" />
						)}
						<Badge
							status={trend === "up" ? "success" : "error"}
							className="text-xs"
						>
							{change > 0 ? "+" : ""}
							{change.toFixed(1)}%
						</Badge>
					</div>
				)}
			</CardContent>
		</Card>
	);
}

