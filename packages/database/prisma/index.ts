export * from "./client";
export * from "./queries";
export * from "./zod/schemas";

// Export prisma as both 'db' and 'prisma' for compatibility
export { db as prisma } from "./client";
