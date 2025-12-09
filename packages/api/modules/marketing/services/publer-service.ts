import Anthropic from "@anthropic-ai/sdk";
import { generateWeeklyContent, generateSinglePost, adaptToTikTok } from "./content-generator-v2";

const PUBLER_API_KEY = process.env.PUBLER_API_KEY;
const PUBLER_BASE_URL = "https://app.publer.io/api/v1";

interface PublerAccount {
  id: string;
  name: string;
  platform: string;
}

interface PostResult {
  success: boolean;
  postId?: string;
  error?: string;
  platform: string;
}

// Obtener cuentas conectadas
export async function getPublerAccounts(): Promise<PublerAccount[]> {
  console.log("📱 Obteniendo cuentas de Publer...");
  
  if (!PUBLER_API_KEY) {
    console.error("❌ PUBLER_API_KEY no configurada");
    return [];
  }

  try {
    const response = await fetch(`${PUBLER_BASE_URL}/accounts`, {
      headers: {
        "Authorization": `Bearer ${PUBLER_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      console.error("❌ Error obteniendo cuentas:", response.status);
      return [];
    }

    const accounts = await response.json();
    console.log("✅ Cuentas encontradas:", accounts.length);
    return accounts;
  } catch (error: any) {
    console.error("❌ Error en Publer:", error.message);
    return [];
  }
}

// Publicar en redes sociales
export async function publishToSocial(params: {
  content: string;
  imageUrl?: string;
  platforms: string[]; // ["instagram", "tiktok"]
  scheduleAt?: Date;
}): Promise<PostResult[]> {
  console.log("📤 Publicando en redes sociales...");
  console.log("  📝 Contenido:", params.content.substring(0, 50) + "...");
  console.log("  📱 Plataformas:", params.platforms.join(", "));

  if (!PUBLER_API_KEY) {
    console.error("❌ PUBLER_API_KEY no configurada");
    return params.platforms.map(p => ({
      success: false,
      error: "API key not configured",
      platform: p
    }));
  }

  try {
    // Obtener cuentas
    const accounts = await getPublerAccounts();
    
    // Filtrar cuentas por plataforma solicitada
    const targetAccounts = accounts.filter((acc: any) => 
      params.platforms.some(p => 
        acc.platform?.toLowerCase().includes(p.toLowerCase()) ||
        acc.type?.toLowerCase().includes(p.toLowerCase())
      )
    );

    if (targetAccounts.length === 0) {
      console.error("❌ No se encontraron cuentas para las plataformas:", params.platforms);
      return params.platforms.map(p => ({
        success: false,
        error: "No account found for platform",
        platform: p
      }));
    }

    console.log("✅ Cuentas objetivo:", targetAccounts.map((a: any) => a.name || a.id));

    // Crear el post
    const postData: any = {
      text: params.content,
      account_ids: targetAccounts.map((a: any) => a.id),
    };

    // Agregar imagen si existe
    if (params.imageUrl) {
      postData.media = [{ url: params.imageUrl }];
    }

    // Programar si se especifica fecha
    if (params.scheduleAt) {
      postData.scheduled_at = params.scheduleAt.toISOString();
    }

    const response = await fetch(`${PUBLER_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PUBLER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Error publicando:", response.status, errorText);
      return params.platforms.map(p => ({
        success: false,
        error: `API error: ${response.status}`,
        platform: p
      }));
    }

    const result = await response.json();
    console.log("✅ Post creado:", result.id || result);

    return params.platforms.map(p => ({
      success: true,
      postId: result.id,
      platform: p
    }));

  } catch (error: any) {
    console.error("❌ Error en publishToSocial:", error.message);
    return params.platforms.map(p => ({
      success: false,
      error: error.message,
      platform: p
    }));
  }
}

// Generar contenido y publicar automáticamente
export async function generateAndPublish(params: {
  productName: string;
  productDescription: string;
  topic: string;
  platforms: string[];
  imageUrl?: string;
}): Promise<{
  content: string;
  results: PostResult[];
}> {
  console.log("🤖 Generando contenido para publicar...");

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // Generar contenido optimizado para redes
  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: `Genera un post para redes sociales (Instagram/TikTok) sobre:

Producto: ${params.productName}
Descripción: ${params.productDescription}
Tema específico: ${params.topic}

REGLAS:
- Máximo 280 caracteres
- Incluir 3-5 hashtags relevantes
- Tono cercano y profesional
- Call to action claro
- Usar emojis apropiados
- En español

Responde SOLO con el texto del post, nada más.`
    }]
  });

  const content = response.content[0].type === "text" 
    ? response.content[0].text 
    : "";

  console.log("✅ Contenido generado:", content.substring(0, 100) + "...");

  // Publicar
  const results = await publishToSocial({
    content,
    imageUrl: params.imageUrl,
    platforms: params.platforms
  });

  return { content, results };
}

// Generar contenido semanal y programar
export async function generateWeeklyAndSchedule(params: {
  product: {
    name: string;
    description: string;
    targetAudience: string;
    usp: string;
    competitors?: string[];
  };
  nicho?: string;
  startDate?: Date;
}): Promise<{
  success: boolean;
  posts: any[];
  tokensUsed: number;
  scheduled: number;
}> {
  console.log("📅 Generando y programando contenido semanal...");

  // Generar 7 posts
  const batch = await generateWeeklyContent(
    params.product,
    params.nicho || "peluqueria"
  );

  const results: any[] = [];
  const startDate = params.startDate || new Date();

  for (let i = 0; i < batch.posts.length; i++) {
    const post = batch.posts[i];
    const tiktokPost = adaptToTikTok(post);
    
    // Calcular fecha de publicación (cada día a las 10:00)
    const publishDate = new Date(startDate);
    publishDate.setDate(publishDate.getDate() + i);
    publishDate.setHours(10, 0, 0, 0);

    // Publicar en Instagram
    const igResult = await publishToSocial({
      content: post.content,
      platforms: ["instagram"],
      scheduleAt: publishDate
    });

    // Publicar en TikTok (1 hora después)
    const tiktokDate = new Date(publishDate);
    tiktokDate.setHours(11, 0, 0, 0);
    
    const tkResult = await publishToSocial({
      content: tiktokPost.content,
      platforms: ["tiktok"],
      scheduleAt: tiktokDate
    });

    results.push({
      day: i + 1,
      date: publishDate.toISOString().split("T")[0],
      instagram: igResult,
      tiktok: tkResult,
      content: post.content.substring(0, 100) + "..."
    });
  }

  const scheduled = results.filter(r => 
    r.instagram[0]?.success || r.tiktok[0]?.success
  ).length;

  console.log(`✅ Programados ${scheduled}/7 días de contenido`);

  return {
    success: scheduled > 0,
    posts: results,
    tokensUsed: batch.tokensUsed,
    scheduled
  };
}

// Generar y publicar un post único optimizado
export async function generateAndPublishOptimized(params: {
  product: {
    name: string;
    description: string;
    targetAudience: string;
    usp: string;
  };
  tipo?: string;
  platforms: string[];
  immediate?: boolean;
}): Promise<{
  success: boolean;
  content: string;
  results: any[];
}> {
  console.log("🚀 Generando y publicando post optimizado...");

  const post = await generateSinglePost(
    params.product,
    params.tipo || "educativo",
    "instagram"
  );

  const results = await publishToSocial({
    content: post.content,
    platforms: params.platforms,
    scheduleAt: params.immediate ? undefined : undefined
  });

  return {
    success: results.every(r => r.success),
    content: post.content,
    results
  };
}

