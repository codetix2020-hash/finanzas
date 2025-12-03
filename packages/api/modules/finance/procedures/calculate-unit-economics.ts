import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { UnitEconomicsCalculator } from "../services/unit-economics";

const inputSchema = z.object({
	mrr: z.number(),
	customers: z.number(),
	grossMargin: z.number(),
	churnRate: z.number(),
	revenueGrowthRate: z.number(),
	newMRRThisMonth: z.number(),
	expansionMRR: z.number(),
	churnedMRR: z.number(),
	contractionMRR: z.number(),
	marketingSpend: z.number(),
	salesSpend: z.number(),
	newCustomersThisMonth: z.number(),
	netBurn: z.number(),
	netNewARR: z.number(),
});

const simulationSchema = z.object({
	baseData: inputSchema,
	changes: z.object({
		churnRateChange: z.number().optional(),
		pricingChange: z.number().optional(),
		cacChange: z.number().optional(),
		grossMarginChange: z.number().optional(),
	}),
});

export const calculateUnitEconomics = protectedProcedure
	.route({ method: "POST", path: "/calculate-unit-economics" })
	.input(inputSchema)
	.output(z.any())
	.handler(async ({ input }) => {
		const unitEconomics = UnitEconomicsCalculator.calculate(input);

		return unitEconomics;
	});

export const simulateUnitEconomics = protectedProcedure
	.route({ method: "POST", path: "/simulate-unit-economics" })
	.input(simulationSchema)
	.output(z.any())
	.handler(async ({ input }) => {
		const baseUnitEconomics = UnitEconomicsCalculator.calculate(
			input.baseData,
		);
		const simulation = UnitEconomicsCalculator.simulateWhatIf(
			baseUnitEconomics,
			input.changes,
		);

		return simulation;
	});

