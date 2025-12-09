import { z } from "zod";
import { publicProcedure } from "../../../orpc/procedures";
import { publishToSocial, generateAndPublish, getPublerAccounts } from "../services/publer-service";

// Obtener cuentas conectadas
export const socialGetAccounts = publicProcedure
  .route({ method: "GET", path: "/marketing/social-get-accounts" })
  .input(z.object({
    organizationId: z.string()
  }))
  .handler(async ({ input }) => {
    console.log("📱 Obteniendo cuentas sociales...");
    
    const accounts = await getPublerAccounts();
    
    return {
      success: true,
      accounts
    };
  });

// Publicar contenido existente
export const socialPublishPost = publicProcedure
  .route({ method: "POST", path: "/marketing/social-publish-post" })
  .input(z.object({
    content: z.string(),
    platforms: z.array(z.string()).default(["instagram", "tiktok"]),
    imageUrl: z.string().optional(),
    scheduleAt: z.string().optional(),
    organizationId: z.string()
  }))
  .handler(async ({ input }) => {
    console.log("📤 Publicando post en redes...");
    
    const results = await publishToSocial({
      content: input.content,
      imageUrl: input.imageUrl,
      platforms: input.platforms,
      scheduleAt: input.scheduleAt ? new Date(input.scheduleAt) : undefined
    });

    const allSuccess = results.every(r => r.success);

    return {
      success: allSuccess,
      results,
      message: allSuccess 
        ? `Publicado en ${input.platforms.join(", ")}` 
        : "Algunos posts fallaron"
    };
  });

// Generar y publicar automáticamente
export const socialGenerateAndPublish = publicProcedure
  .route({ method: "POST", path: "/marketing/social-generate-and-publish" })
  .input(z.object({
    productName: z.string(),
    productDescription: z.string(),
    topic: z.string(),
    platforms: z.array(z.string()).default(["instagram", "tiktok"]),
    imageUrl: z.string().optional(),
    organizationId: z.string()
  }))
  .handler(async ({ input }) => {
    console.log("🚀 Generando y publicando contenido...");

    const result = await generateAndPublish({
      productName: input.productName,
      productDescription: input.productDescription,
      topic: input.topic,
      platforms: input.platforms,
      imageUrl: input.imageUrl
    });

    const allSuccess = result.results.every(r => r.success);

    return {
      success: allSuccess,
      content: result.content,
      results: result.results,
      message: allSuccess
        ? `Contenido generado y publicado en ${input.platforms.join(", ")}`
        : "Contenido generado pero algunos posts fallaron"
    };
  });

