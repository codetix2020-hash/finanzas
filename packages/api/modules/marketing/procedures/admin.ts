import { z } from "zod";
import { publicProcedure } from "../../../orpc/procedures";
import { prisma } from "@repo/database";

// Limpiar contenido de prueba
export const cleanupTestData = publicProcedure
  .route({ method: "POST", path: "/marketing/admin/cleanup" })
  .input(z.object({
    organizationId: z.string(),
    keepProductNames: z.array(z.string()).optional()
  }))
  .handler(async ({ input }) => {
    console.log("🧹 Limpiando datos de prueba...");
    
    const keepNames = input.keepProductNames || ["ReservasPro"];
    
    // Eliminar productos que NO están en la lista de mantener
    const deletedProducts = await prisma.saasProduct.deleteMany({
      where: {
        organizationId: input.organizationId,
        name: {
          notIn: keepNames
        }
      }
    });
    
    // Eliminar contenido huérfano (sin producto válido)
    const validProducts = await prisma.saasProduct.findMany({
      where: { organizationId: input.organizationId },
      select: { id: true }
    });
    const validProductIds = validProducts.map(p => p.id);
    
    const deletedContent = await prisma.marketingContent.deleteMany({
      where: {
        organizationId: input.organizationId,
        productId: {
          notIn: validProductIds
        }
      }
    });
    
    // Eliminar decisiones huérfanas
    const deletedDecisions = await prisma.marketingDecision.deleteMany({
      where: {
        organizationId: input.organizationId,
        productId: {
          notIn: validProductIds
        }
      }
    });
    
    console.log(`✅ Limpiado: ${deletedProducts.count} productos, ${deletedContent.count} contenidos, ${deletedDecisions.count} decisiones`);
    
    return {
      success: true,
      deleted: {
        products: deletedProducts.count,
        content: deletedContent.count,
        decisions: deletedDecisions.count
      }
    };
  });

